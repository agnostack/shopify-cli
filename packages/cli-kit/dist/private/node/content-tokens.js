import colors from '../../public/node/colors.js';
import { stringifyMessage } from '../../public/node/output.js';
import { relativizePath } from '../../public/node/path.js';
import terminalLink from 'terminal-link';
import cjs from 'color-json';
export class ContentToken {
    constructor(value) {
        this.value = value;
    }
}
export class RawContentToken extends ContentToken {
    output() {
        return this.value;
    }
}
export class LinkContentToken extends ContentToken {
    constructor(value, link) {
        super(value);
        this.link = link;
    }
    output() {
        const text = colors.green(stringifyMessage(this.value));
        const url = this.link ?? '';
        return terminalLink(text, url, { fallback: () => `${text} ( ${url} )` });
    }
}
export class CommandContentToken extends ContentToken {
    output() {
        return colors.bold(colors.yellow(stringifyMessage(this.value)));
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class JsonContentToken extends ContentToken {
    output() {
        try {
            return cjs(stringifyMessage(this.value) ?? {});
            // eslint-disable-next-line no-catch-all/no-catch-all
        }
        catch (_) {
            return JSON.stringify(stringifyMessage(this.value) ?? {}, null, 2);
        }
    }
}
export class LinesDiffContentToken extends ContentToken {
    output() {
        return this.value
            .map((part) => {
            if (part.added) {
                return part.value
                    .split(/\n/)
                    .filter((line) => line !== '')
                    .map((line) => {
                    return colors.green(`+ ${line}\n`);
                });
            }
            else if (part.removed) {
                return part.value
                    .split(/\n/)
                    .filter((line) => line !== '')
                    .map((line) => {
                    return colors.magenta(`- ${line}\n`);
                });
            }
            else {
                return part.value;
            }
        })
            .flat();
    }
}
export class ColorContentToken extends ContentToken {
    constructor(value, color) {
        super(value);
        this.color = color;
    }
    output() {
        return this.color(stringifyMessage(this.value));
    }
}
export class ErrorContentToken extends ContentToken {
    output() {
        return colors.bold.redBright(stringifyMessage(this.value));
    }
}
export class PathContentToken extends ContentToken {
    output() {
        return relativizePath(stringifyMessage(this.value));
    }
}
export class HeadingContentToken extends ContentToken {
    output() {
        return colors.bold.underline(stringifyMessage(this.value));
    }
}
export class SubHeadingContentToken extends ContentToken {
    output() {
        return colors.underline(stringifyMessage(this.value));
    }
}
export class ItalicContentToken extends ContentToken {
    output() {
        return colors.italic(stringifyMessage(this.value));
    }
}
//# sourceMappingURL=content-tokens.js.map