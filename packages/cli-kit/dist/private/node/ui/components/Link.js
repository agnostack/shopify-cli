import { LinksContext } from '../contexts/LinksContext.js';
import { Text } from 'ink';
import React, { useContext } from 'react';
import ansiEscapes from 'ansi-escapes';
import supportsHyperlinks from 'supports-hyperlinks';
import chalk from 'chalk';
function link(label, url, linksContext) {
    if (!supportsHyperlinks.stdout) {
        if (linksContext === null) {
            return label ? `${label} ${chalk.dim(`( ${url} )`)}` : url;
        }
        const linkId = linksContext.addLink(label, url);
        return `${label ?? url} [${linkId}]`;
    }
    return ansiEscapes.link(label ?? url, url);
}
/**
 * `Link` displays a clickable link when supported by the terminal.
 */
const Link = ({ label, url }) => {
    const linksContext = useContext(LinksContext);
    return React.createElement(Text, null, link(label, url, linksContext));
};
export { Link };
//# sourceMappingURL=Link.js.map