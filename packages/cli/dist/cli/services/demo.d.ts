import { zod } from '@shopify/cli-kit/node/schema';
declare const outputStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"output">;
    properties: zod.ZodObject<{
        content: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        content: string;
    }, {
        content: string;
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "output";
    properties: {
        content: string;
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "output";
    properties: {
        content: string;
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type OutputStep = zod.infer<typeof outputStepSchema>;
declare const renderInfoStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"info">;
    properties: zod.ZodObject<{
        headline: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }>, "many">]>>;
        body: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }>, "many">]>>;
        nextSteps: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">>;
        reference: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">>;
        link: zod.ZodOptional<zod.ZodObject<{
            label: zod.ZodString;
            url: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            label: string;
            url: string;
        }, {
            label: string;
            url: string;
        }>>;
        customSections: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
            title: zod.ZodOptional<zod.ZodString>;
            body: zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, "many">]>;
        }, "strip", zod.ZodTypeAny, {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }, {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }>, "many">>;
        orderedNextSteps: zod.ZodOptional<zod.ZodBoolean>;
    }, "strip", zod.ZodTypeAny, {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    }, {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "info";
    properties: {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "info";
    properties: {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type RenderInfoStep = zod.infer<typeof renderInfoStepSchema>;
declare const renderSuccessStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"success">;
    properties: zod.ZodObject<{
        headline: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }>, "many">]>>;
        body: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }>, "many">]>>;
        nextSteps: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">>;
        reference: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">>;
        link: zod.ZodOptional<zod.ZodObject<{
            label: zod.ZodString;
            url: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            label: string;
            url: string;
        }, {
            label: string;
            url: string;
        }>>;
        customSections: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
            title: zod.ZodOptional<zod.ZodString>;
            body: zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, "many">]>;
        }, "strip", zod.ZodTypeAny, {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }, {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }>, "many">>;
        orderedNextSteps: zod.ZodOptional<zod.ZodBoolean>;
    }, "strip", zod.ZodTypeAny, {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    }, {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "success";
    properties: {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "success";
    properties: {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type RenderSuccessStep = zod.infer<typeof renderSuccessStepSchema>;
declare const renderWarningStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"warning">;
    properties: zod.ZodObject<{
        headline: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        }>, "many">]>>;
        body: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        }>, "many">]>>;
        nextSteps: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">>;
        reference: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">>;
        link: zod.ZodOptional<zod.ZodObject<{
            label: zod.ZodString;
            url: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            label: string;
            url: string;
        }, {
            label: string;
            url: string;
        }>>;
        customSections: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
            title: zod.ZodOptional<zod.ZodString>;
            body: zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, "many">]>;
        }, "strip", zod.ZodTypeAny, {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }, {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }>, "many">>;
        orderedNextSteps: zod.ZodOptional<zod.ZodBoolean>;
    }, "strip", zod.ZodTypeAny, {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    }, {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "warning";
    properties: {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "warning";
    properties: {
        headline?: string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | (string | {
            command: string;
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        })[] | undefined;
        body?: string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | {
            list: {
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                title?: string | undefined;
                ordered?: boolean | undefined;
            };
        })[] | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        reference?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
        link?: {
            label: string;
            url: string;
        } | undefined;
        customSections?: {
            body: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[]) & (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined);
            title?: string | undefined;
        }[] | undefined;
        orderedNextSteps?: boolean | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type RenderWarningStep = zod.infer<typeof renderWarningStepSchema>;
declare const renderFatalErrorStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"fatalError">;
    properties: zod.ZodObject<{
        errorType: zod.ZodUnion<[zod.ZodLiteral<"abort">, zod.ZodLiteral<"bug">]>;
        message: zod.ZodString;
        tryMessage: zod.ZodOptional<zod.ZodString>;
        nextSteps: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">>;
    }, "strip", zod.ZodTypeAny, {
        message: string;
        errorType: "abort" | "bug";
        tryMessage?: string | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
    }, {
        message: string;
        errorType: "abort" | "bug";
        tryMessage?: string | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "fatalError";
    properties: {
        message: string;
        errorType: "abort" | "bug";
        tryMessage?: string | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "fatalError";
    properties: {
        message: string;
        errorType: "abort" | "bug";
        tryMessage?: string | undefined;
        nextSteps?: (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        } | (string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        })[])[] | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type RenderFatalErrorStep = zod.infer<typeof renderFatalErrorStepSchema>;
declare const renderTableStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"table">;
    properties: zod.ZodObject<{
        rows: zod.ZodArray<zod.ZodObject<{}, "strip", zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, zod.objectOutputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">, zod.objectInputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">>, "many">;
        columns: zod.ZodObject<{}, "strip", zod.ZodObject<{
            header: zod.ZodOptional<zod.ZodString>;
            color: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            header?: string | undefined;
            color?: string | undefined;
        }, {
            header?: string | undefined;
            color?: string | undefined;
        }>, zod.objectOutputType<{}, zod.ZodObject<{
            header: zod.ZodOptional<zod.ZodString>;
            color: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            header?: string | undefined;
            color?: string | undefined;
        }, {
            header?: string | undefined;
            color?: string | undefined;
        }>, "strip">, zod.objectInputType<{}, zod.ZodObject<{
            header: zod.ZodOptional<zod.ZodString>;
            color: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            header?: string | undefined;
            color?: string | undefined;
        }, {
            header?: string | undefined;
            color?: string | undefined;
        }>, "strip">>;
    }, "strip", zod.ZodTypeAny, {
        rows: zod.objectOutputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">[];
        columns: {} & {
            [k: string]: {
                header?: string | undefined;
                color?: string | undefined;
            };
        };
    }, {
        rows: zod.objectInputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">[];
        columns: {} & {
            [k: string]: {
                header?: string | undefined;
                color?: string | undefined;
            };
        };
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "table";
    properties: {
        rows: zod.objectOutputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">[];
        columns: {} & {
            [k: string]: {
                header?: string | undefined;
                color?: string | undefined;
            };
        };
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "table";
    properties: {
        rows: zod.objectInputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">[];
        columns: {} & {
            [k: string]: {
                header?: string | undefined;
                color?: string | undefined;
            };
        };
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type RenderTableStep = zod.infer<typeof renderTableStepSchema>;
declare const renderAutoCompletePromptStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"autocompletePrompt">;
    properties: zod.ZodObject<{
        message: zod.ZodString;
        choices: zod.ZodArray<zod.ZodObject<{
            label: zod.ZodString;
            value: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            value: string;
            label: string;
        }, {
            value: string;
            label: string;
        }>, "many">;
    }, "strip", zod.ZodTypeAny, {
        message: string;
        choices: {
            value: string;
            label: string;
        }[];
    }, {
        message: string;
        choices: {
            value: string;
            label: string;
        }[];
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "autocompletePrompt";
    properties: {
        message: string;
        choices: {
            value: string;
            label: string;
        }[];
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "autocompletePrompt";
    properties: {
        message: string;
        choices: {
            value: string;
            label: string;
        }[];
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type RenderAutocompletePromptStep = zod.infer<typeof renderAutoCompletePromptStepSchema>;
declare const renderConfirmationPromptStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"confirmationPrompt">;
    properties: zod.ZodObject<{
        message: zod.ZodString;
        infoTable: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{}, "strip", zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip">, zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip">>, zod.ZodArray<zod.ZodObject<{
            color: zod.ZodOptional<zod.ZodString>;
            header: zod.ZodString;
            helperText: zod.ZodOptional<zod.ZodString>;
            items: zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">;
        }, "strip", zod.ZodTypeAny, {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }, {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }>, "many">]>>;
        defaultValue: zod.ZodOptional<zod.ZodBoolean>;
        confirmationMessage: zod.ZodString;
        cancellationMessage: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        message: string;
        confirmationMessage: string;
        cancellationMessage: string;
        infoTable?: zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip"> | {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }[] | undefined;
        defaultValue?: boolean | undefined;
    }, {
        message: string;
        confirmationMessage: string;
        cancellationMessage: string;
        infoTable?: zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip"> | {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }[] | undefined;
        defaultValue?: boolean | undefined;
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "confirmationPrompt";
    properties: {
        message: string;
        confirmationMessage: string;
        cancellationMessage: string;
        infoTable?: zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip"> | {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }[] | undefined;
        defaultValue?: boolean | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "confirmationPrompt";
    properties: {
        message: string;
        confirmationMessage: string;
        cancellationMessage: string;
        infoTable?: zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip"> | {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }[] | undefined;
        defaultValue?: boolean | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type RenderConfirmationPromptStep = zod.infer<typeof renderConfirmationPromptStepSchema>;
declare const renderSelectPromptStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"selectPrompt">;
    properties: zod.ZodObject<{
        message: zod.ZodString;
        choices: zod.ZodArray<zod.ZodObject<{
            label: zod.ZodString;
            value: zod.ZodString;
            key: zod.ZodOptional<zod.ZodString>;
            group: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            value: string;
            label: string;
            key?: string | undefined;
            group?: string | undefined;
        }, {
            value: string;
            label: string;
            key?: string | undefined;
            group?: string | undefined;
        }>, "many">;
        defaultValue: zod.ZodOptional<zod.ZodString>;
        infoTable: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{}, "strip", zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip">, zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip">>, zod.ZodArray<zod.ZodObject<{
            color: zod.ZodOptional<zod.ZodString>;
            header: zod.ZodString;
            helperText: zod.ZodOptional<zod.ZodString>;
            items: zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">;
        }, "strip", zod.ZodTypeAny, {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }, {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }>, "many">]>>;
    }, "strip", zod.ZodTypeAny, {
        message: string;
        choices: {
            value: string;
            label: string;
            key?: string | undefined;
            group?: string | undefined;
        }[];
        defaultValue?: string | undefined;
        infoTable?: zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip"> | {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }[] | undefined;
    }, {
        message: string;
        choices: {
            value: string;
            label: string;
            key?: string | undefined;
            group?: string | undefined;
        }[];
        defaultValue?: string | undefined;
        infoTable?: zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip"> | {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }[] | undefined;
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "selectPrompt";
    properties: {
        message: string;
        choices: {
            value: string;
            label: string;
            key?: string | undefined;
            group?: string | undefined;
        }[];
        defaultValue?: string | undefined;
        infoTable?: zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip"> | {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }[] | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "selectPrompt";
    properties: {
        message: string;
        choices: {
            value: string;
            label: string;
            key?: string | undefined;
            group?: string | undefined;
        }[];
        defaultValue?: string | undefined;
        infoTable?: zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, zod.ZodArray<zod.ZodType<string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }, zod.ZodTypeDef, string | {
            command: string;
        } | {
            link: {
                label: string;
                url: string;
            };
        } | {
            char: string;
        } | {
            userInput: string;
        } | {
            subdued: string;
        } | {
            filePath: string;
        } | {
            bold: string;
        }>, "many">]>, "many">, "strip"> | {
            header: string;
            items: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[];
            color?: string | undefined;
            helperText?: string | undefined;
        }[] | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type RenderSelectPromptStep = zod.infer<typeof renderSelectPromptStepSchema>;
declare const renderTextPromptStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"textPrompt">;
    properties: zod.ZodObject<{
        message: zod.ZodString;
        defaultValue: zod.ZodOptional<zod.ZodString>;
        password: zod.ZodOptional<zod.ZodBoolean>;
        allowEmpty: zod.ZodOptional<zod.ZodBoolean>;
    }, "strip", zod.ZodTypeAny, {
        message: string;
        defaultValue?: string | undefined;
        password?: boolean | undefined;
        allowEmpty?: boolean | undefined;
    }, {
        message: string;
        defaultValue?: string | undefined;
        password?: boolean | undefined;
        allowEmpty?: boolean | undefined;
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "textPrompt";
    properties: {
        message: string;
        defaultValue?: string | undefined;
        password?: boolean | undefined;
        allowEmpty?: boolean | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "textPrompt";
    properties: {
        message: string;
        defaultValue?: string | undefined;
        password?: boolean | undefined;
        allowEmpty?: boolean | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type RenderTextPromptStep = zod.infer<typeof renderTextPromptStepSchema>;
declare const sleepStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"sleep">;
    properties: zod.ZodObject<{
        duration: zod.ZodNumber;
    }, "strip", zod.ZodTypeAny, {
        duration: number;
    }, {
        duration: number;
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "sleep";
    properties: {
        duration: number;
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "sleep";
    properties: {
        duration: number;
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type SleepStep = zod.infer<typeof sleepStepSchema>;
declare const taskbarStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"taskbar">;
    properties: zod.ZodObject<{
        steps: zod.ZodArray<zod.ZodObject<{
            title: zod.ZodString;
            duration: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
            title: string;
            duration: number;
        }, {
            title: string;
            duration: number;
        }>, "many">;
    }, "strip", zod.ZodTypeAny, {
        steps: {
            title: string;
            duration: number;
        }[];
    }, {
        steps: {
            title: string;
            duration: number;
        }[];
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "taskbar";
    properties: {
        steps: {
            title: string;
            duration: number;
        }[];
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "taskbar";
    properties: {
        steps: {
            title: string;
            duration: number;
        }[];
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type TaskbarStep = zod.infer<typeof taskbarStepSchema>;
declare const renderConcurrentStepSchema: zod.ZodObject<{
    description: zod.ZodOptional<zod.ZodString>;
    title: zod.ZodOptional<zod.ZodString>;
    type: zod.ZodLiteral<"concurrent">;
    properties: zod.ZodObject<{
        processes: zod.ZodArray<zod.ZodObject<{
            prefix: zod.ZodString;
            steps: zod.ZodArray<zod.ZodObject<{
                startMessage: zod.ZodOptional<zod.ZodString>;
                duration: zod.ZodNumber;
                endMessage: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                duration: number;
                startMessage?: string | undefined;
                endMessage?: string | undefined;
            }, {
                duration: number;
                startMessage?: string | undefined;
                endMessage?: string | undefined;
            }>, "many">;
        }, "strip", zod.ZodTypeAny, {
            steps: {
                duration: number;
                startMessage?: string | undefined;
                endMessage?: string | undefined;
            }[];
            prefix: string;
        }, {
            steps: {
                duration: number;
                startMessage?: string | undefined;
                endMessage?: string | undefined;
            }[];
            prefix: string;
        }>, "many">;
        footer: zod.ZodOptional<zod.ZodObject<{
            shortcuts: zod.ZodArray<zod.ZodObject<{
                key: zod.ZodString;
                action: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                key: string;
                action: string;
            }, {
                key: string;
                action: string;
            }>, "many">;
            subTitle: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            shortcuts: {
                key: string;
                action: string;
            }[];
            subTitle?: string | undefined;
        }, {
            shortcuts: {
                key: string;
                action: string;
            }[];
            subTitle?: string | undefined;
        }>>;
    }, "strip", zod.ZodTypeAny, {
        processes: {
            steps: {
                duration: number;
                startMessage?: string | undefined;
                endMessage?: string | undefined;
            }[];
            prefix: string;
        }[];
        footer?: {
            shortcuts: {
                key: string;
                action: string;
            }[];
            subTitle?: string | undefined;
        } | undefined;
    }, {
        processes: {
            steps: {
                duration: number;
                startMessage?: string | undefined;
                endMessage?: string | undefined;
            }[];
            prefix: string;
        }[];
        footer?: {
            shortcuts: {
                key: string;
                action: string;
            }[];
            subTitle?: string | undefined;
        } | undefined;
    }>;
}, "strip", zod.ZodTypeAny, {
    type: "concurrent";
    properties: {
        processes: {
            steps: {
                duration: number;
                startMessage?: string | undefined;
                endMessage?: string | undefined;
            }[];
            prefix: string;
        }[];
        footer?: {
            shortcuts: {
                key: string;
                action: string;
            }[];
            subTitle?: string | undefined;
        } | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}, {
    type: "concurrent";
    properties: {
        processes: {
            steps: {
                duration: number;
                startMessage?: string | undefined;
                endMessage?: string | undefined;
            }[];
            prefix: string;
        }[];
        footer?: {
            shortcuts: {
                key: string;
                action: string;
            }[];
            subTitle?: string | undefined;
        } | undefined;
    };
    description?: string | undefined;
    title?: string | undefined;
}>;
type RenderConcurrentStep = zod.infer<typeof renderConcurrentStepSchema>;
export type DemoStep = OutputStep | RenderInfoStep | RenderSuccessStep | RenderWarningStep | RenderTableStep | RenderFatalErrorStep | RenderAutocompletePromptStep | RenderConfirmationPromptStep | RenderSelectPromptStep | RenderTextPromptStep | SleepStep | TaskbarStep | RenderConcurrentStep;
export declare const demoStepsSchema: zod.ZodObject<{
    $schema: zod.ZodOptional<zod.ZodString>;
    command: zod.ZodOptional<zod.ZodString>;
    steps: zod.ZodArray<zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"output">;
        properties: zod.ZodObject<{
            content: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "output";
        properties: {
            content: string;
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "output";
        properties: {
            content: string;
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"info">;
        properties: zod.ZodObject<{
            headline: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }>, "many">]>>;
            body: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, "many">]>>;
            nextSteps: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">>;
            reference: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">>;
            link: zod.ZodOptional<zod.ZodObject<{
                label: zod.ZodString;
                url: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                label: string;
                url: string;
            }, {
                label: string;
                url: string;
            }>>;
            customSections: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                title: zod.ZodOptional<zod.ZodString>;
                body: zod.ZodUnion<[zod.ZodType<string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }, zod.ZodTypeDef, string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }>, zod.ZodArray<zod.ZodType<string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }, zod.ZodTypeDef, string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }>, "many">]>;
            }, "strip", zod.ZodTypeAny, {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }, {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }>, "many">>;
            orderedNextSteps: zod.ZodOptional<zod.ZodBoolean>;
        }, "strip", zod.ZodTypeAny, {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        }, {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "info";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "info";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"success">;
        properties: zod.ZodObject<{
            headline: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }>, "many">]>>;
            body: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, "many">]>>;
            nextSteps: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">>;
            reference: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">>;
            link: zod.ZodOptional<zod.ZodObject<{
                label: zod.ZodString;
                url: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                label: string;
                url: string;
            }, {
                label: string;
                url: string;
            }>>;
            customSections: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                title: zod.ZodOptional<zod.ZodString>;
                body: zod.ZodUnion<[zod.ZodType<string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }, zod.ZodTypeDef, string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }>, zod.ZodArray<zod.ZodType<string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }, zod.ZodTypeDef, string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }>, "many">]>;
            }, "strip", zod.ZodTypeAny, {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }, {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }>, "many">>;
            orderedNextSteps: zod.ZodOptional<zod.ZodBoolean>;
        }, "strip", zod.ZodTypeAny, {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        }, {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "success";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "success";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"warning">;
        properties: zod.ZodObject<{
            headline: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            }>, "many">]>>;
            body: zod.ZodOptional<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            }>, "many">]>>;
            nextSteps: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">>;
            reference: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">>;
            link: zod.ZodOptional<zod.ZodObject<{
                label: zod.ZodString;
                url: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                label: string;
                url: string;
            }, {
                label: string;
                url: string;
            }>>;
            customSections: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                title: zod.ZodOptional<zod.ZodString>;
                body: zod.ZodUnion<[zod.ZodType<string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }, zod.ZodTypeDef, string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }>, zod.ZodArray<zod.ZodType<string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }, zod.ZodTypeDef, string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                }>, "many">]>;
            }, "strip", zod.ZodTypeAny, {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }, {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }>, "many">>;
            orderedNextSteps: zod.ZodOptional<zod.ZodBoolean>;
        }, "strip", zod.ZodTypeAny, {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        }, {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "warning";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "warning";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"table">;
        properties: zod.ZodObject<{
            rows: zod.ZodArray<zod.ZodObject<{}, "strip", zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, zod.objectOutputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">, zod.objectInputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">>, "many">;
            columns: zod.ZodObject<{}, "strip", zod.ZodObject<{
                header: zod.ZodOptional<zod.ZodString>;
                color: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                header?: string | undefined;
                color?: string | undefined;
            }, {
                header?: string | undefined;
                color?: string | undefined;
            }>, zod.objectOutputType<{}, zod.ZodObject<{
                header: zod.ZodOptional<zod.ZodString>;
                color: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                header?: string | undefined;
                color?: string | undefined;
            }, {
                header?: string | undefined;
                color?: string | undefined;
            }>, "strip">, zod.objectInputType<{}, zod.ZodObject<{
                header: zod.ZodOptional<zod.ZodString>;
                color: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                header?: string | undefined;
                color?: string | undefined;
            }, {
                header?: string | undefined;
                color?: string | undefined;
            }>, "strip">>;
        }, "strip", zod.ZodTypeAny, {
            rows: zod.objectOutputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">[];
            columns: {} & {
                [k: string]: {
                    header?: string | undefined;
                    color?: string | undefined;
                };
            };
        }, {
            rows: zod.objectInputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">[];
            columns: {} & {
                [k: string]: {
                    header?: string | undefined;
                    color?: string | undefined;
                };
            };
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "table";
        properties: {
            rows: zod.objectOutputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">[];
            columns: {} & {
                [k: string]: {
                    header?: string | undefined;
                    color?: string | undefined;
                };
            };
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "table";
        properties: {
            rows: zod.objectInputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">[];
            columns: {} & {
                [k: string]: {
                    header?: string | undefined;
                    color?: string | undefined;
                };
            };
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"fatalError">;
        properties: zod.ZodObject<{
            errorType: zod.ZodUnion<[zod.ZodLiteral<"abort">, zod.ZodLiteral<"bug">]>;
            message: zod.ZodString;
            tryMessage: zod.ZodOptional<zod.ZodString>;
            nextSteps: zod.ZodOptional<zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">>;
        }, "strip", zod.ZodTypeAny, {
            message: string;
            errorType: "abort" | "bug";
            tryMessage?: string | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
        }, {
            message: string;
            errorType: "abort" | "bug";
            tryMessage?: string | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "fatalError";
        properties: {
            message: string;
            errorType: "abort" | "bug";
            tryMessage?: string | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "fatalError";
        properties: {
            message: string;
            errorType: "abort" | "bug";
            tryMessage?: string | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"autocompletePrompt">;
        properties: zod.ZodObject<{
            message: zod.ZodString;
            choices: zod.ZodArray<zod.ZodObject<{
                label: zod.ZodString;
                value: zod.ZodString;
            }, "strip", zod.ZodTypeAny, {
                value: string;
                label: string;
            }, {
                value: string;
                label: string;
            }>, "many">;
        }, "strip", zod.ZodTypeAny, {
            message: string;
            choices: {
                value: string;
                label: string;
            }[];
        }, {
            message: string;
            choices: {
                value: string;
                label: string;
            }[];
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "autocompletePrompt";
        properties: {
            message: string;
            choices: {
                value: string;
                label: string;
            }[];
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "autocompletePrompt";
        properties: {
            message: string;
            choices: {
                value: string;
                label: string;
            }[];
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"confirmationPrompt">;
        properties: zod.ZodObject<{
            message: zod.ZodString;
            infoTable: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{}, "strip", zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip">, zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip">>, zod.ZodArray<zod.ZodObject<{
                color: zod.ZodOptional<zod.ZodString>;
                header: zod.ZodString;
                helperText: zod.ZodOptional<zod.ZodString>;
                items: zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                }, zod.ZodTypeDef, string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                }>, zod.ZodArray<zod.ZodType<string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                }, zod.ZodTypeDef, string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                }>, "many">]>, "many">;
            }, "strip", zod.ZodTypeAny, {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }, {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }>, "many">]>>;
            defaultValue: zod.ZodOptional<zod.ZodBoolean>;
            confirmationMessage: zod.ZodString;
            cancellationMessage: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            message: string;
            confirmationMessage: string;
            cancellationMessage: string;
            infoTable?: zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
            defaultValue?: boolean | undefined;
        }, {
            message: string;
            confirmationMessage: string;
            cancellationMessage: string;
            infoTable?: zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
            defaultValue?: boolean | undefined;
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "confirmationPrompt";
        properties: {
            message: string;
            confirmationMessage: string;
            cancellationMessage: string;
            infoTable?: zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
            defaultValue?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "confirmationPrompt";
        properties: {
            message: string;
            confirmationMessage: string;
            cancellationMessage: string;
            infoTable?: zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
            defaultValue?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"selectPrompt">;
        properties: zod.ZodObject<{
            message: zod.ZodString;
            choices: zod.ZodArray<zod.ZodObject<{
                label: zod.ZodString;
                value: zod.ZodString;
                key: zod.ZodOptional<zod.ZodString>;
                group: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                value: string;
                label: string;
                key?: string | undefined;
                group?: string | undefined;
            }, {
                value: string;
                label: string;
                key?: string | undefined;
                group?: string | undefined;
            }>, "many">;
            defaultValue: zod.ZodOptional<zod.ZodString>;
            infoTable: zod.ZodOptional<zod.ZodUnion<[zod.ZodObject<{}, "strip", zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip">, zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip">>, zod.ZodArray<zod.ZodObject<{
                color: zod.ZodOptional<zod.ZodString>;
                header: zod.ZodString;
                helperText: zod.ZodOptional<zod.ZodString>;
                items: zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                }, zod.ZodTypeDef, string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                }>, zod.ZodArray<zod.ZodType<string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                }, zod.ZodTypeDef, string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                }>, "many">]>, "many">;
            }, "strip", zod.ZodTypeAny, {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }, {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }>, "many">]>>;
        }, "strip", zod.ZodTypeAny, {
            message: string;
            choices: {
                value: string;
                label: string;
                key?: string | undefined;
                group?: string | undefined;
            }[];
            defaultValue?: string | undefined;
            infoTable?: zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
        }, {
            message: string;
            choices: {
                value: string;
                label: string;
                key?: string | undefined;
                group?: string | undefined;
            }[];
            defaultValue?: string | undefined;
            infoTable?: zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "selectPrompt";
        properties: {
            message: string;
            choices: {
                value: string;
                label: string;
                key?: string | undefined;
                group?: string | undefined;
            }[];
            defaultValue?: string | undefined;
            infoTable?: zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "selectPrompt";
        properties: {
            message: string;
            choices: {
                value: string;
                label: string;
                key?: string | undefined;
                group?: string | undefined;
            }[];
            defaultValue?: string | undefined;
            infoTable?: zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"textPrompt">;
        properties: zod.ZodObject<{
            message: zod.ZodString;
            defaultValue: zod.ZodOptional<zod.ZodString>;
            password: zod.ZodOptional<zod.ZodBoolean>;
            allowEmpty: zod.ZodOptional<zod.ZodBoolean>;
        }, "strip", zod.ZodTypeAny, {
            message: string;
            defaultValue?: string | undefined;
            password?: boolean | undefined;
            allowEmpty?: boolean | undefined;
        }, {
            message: string;
            defaultValue?: string | undefined;
            password?: boolean | undefined;
            allowEmpty?: boolean | undefined;
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "textPrompt";
        properties: {
            message: string;
            defaultValue?: string | undefined;
            password?: boolean | undefined;
            allowEmpty?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "textPrompt";
        properties: {
            message: string;
            defaultValue?: string | undefined;
            password?: boolean | undefined;
            allowEmpty?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"sleep">;
        properties: zod.ZodObject<{
            duration: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
            duration: number;
        }, {
            duration: number;
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "sleep";
        properties: {
            duration: number;
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "sleep";
        properties: {
            duration: number;
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"taskbar">;
        properties: zod.ZodObject<{
            steps: zod.ZodArray<zod.ZodObject<{
                title: zod.ZodString;
                duration: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
                title: string;
                duration: number;
            }, {
                title: string;
                duration: number;
            }>, "many">;
        }, "strip", zod.ZodTypeAny, {
            steps: {
                title: string;
                duration: number;
            }[];
        }, {
            steps: {
                title: string;
                duration: number;
            }[];
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "taskbar";
        properties: {
            steps: {
                title: string;
                duration: number;
            }[];
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "taskbar";
        properties: {
            steps: {
                title: string;
                duration: number;
            }[];
        };
        description?: string | undefined;
        title?: string | undefined;
    }>, zod.ZodObject<{
        description: zod.ZodOptional<zod.ZodString>;
        title: zod.ZodOptional<zod.ZodString>;
        type: zod.ZodLiteral<"concurrent">;
        properties: zod.ZodObject<{
            processes: zod.ZodArray<zod.ZodObject<{
                prefix: zod.ZodString;
                steps: zod.ZodArray<zod.ZodObject<{
                    startMessage: zod.ZodOptional<zod.ZodString>;
                    duration: zod.ZodNumber;
                    endMessage: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    duration: number;
                    startMessage?: string | undefined;
                    endMessage?: string | undefined;
                }, {
                    duration: number;
                    startMessage?: string | undefined;
                    endMessage?: string | undefined;
                }>, "many">;
            }, "strip", zod.ZodTypeAny, {
                steps: {
                    duration: number;
                    startMessage?: string | undefined;
                    endMessage?: string | undefined;
                }[];
                prefix: string;
            }, {
                steps: {
                    duration: number;
                    startMessage?: string | undefined;
                    endMessage?: string | undefined;
                }[];
                prefix: string;
            }>, "many">;
            footer: zod.ZodOptional<zod.ZodObject<{
                shortcuts: zod.ZodArray<zod.ZodObject<{
                    key: zod.ZodString;
                    action: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    key: string;
                    action: string;
                }, {
                    key: string;
                    action: string;
                }>, "many">;
                subTitle: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                shortcuts: {
                    key: string;
                    action: string;
                }[];
                subTitle?: string | undefined;
            }, {
                shortcuts: {
                    key: string;
                    action: string;
                }[];
                subTitle?: string | undefined;
            }>>;
        }, "strip", zod.ZodTypeAny, {
            processes: {
                steps: {
                    duration: number;
                    startMessage?: string | undefined;
                    endMessage?: string | undefined;
                }[];
                prefix: string;
            }[];
            footer?: {
                shortcuts: {
                    key: string;
                    action: string;
                }[];
                subTitle?: string | undefined;
            } | undefined;
        }, {
            processes: {
                steps: {
                    duration: number;
                    startMessage?: string | undefined;
                    endMessage?: string | undefined;
                }[];
                prefix: string;
            }[];
            footer?: {
                shortcuts: {
                    key: string;
                    action: string;
                }[];
                subTitle?: string | undefined;
            } | undefined;
        }>;
    }, "strip", zod.ZodTypeAny, {
        type: "concurrent";
        properties: {
            processes: {
                steps: {
                    duration: number;
                    startMessage?: string | undefined;
                    endMessage?: string | undefined;
                }[];
                prefix: string;
            }[];
            footer?: {
                shortcuts: {
                    key: string;
                    action: string;
                }[];
                subTitle?: string | undefined;
            } | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }, {
        type: "concurrent";
        properties: {
            processes: {
                steps: {
                    duration: number;
                    startMessage?: string | undefined;
                    endMessage?: string | undefined;
                }[];
                prefix: string;
            }[];
            footer?: {
                shortcuts: {
                    key: string;
                    action: string;
                }[];
                subTitle?: string | undefined;
            } | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    }>]>, "many">;
}, "strip", zod.ZodTypeAny, {
    steps: ({
        type: "output";
        properties: {
            content: string;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "info";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "success";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "warning";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "fatalError";
        properties: {
            message: string;
            errorType: "abort" | "bug";
            tryMessage?: string | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "table";
        properties: {
            rows: zod.objectOutputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">[];
            columns: {} & {
                [k: string]: {
                    header?: string | undefined;
                    color?: string | undefined;
                };
            };
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "autocompletePrompt";
        properties: {
            message: string;
            choices: {
                value: string;
                label: string;
            }[];
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "confirmationPrompt";
        properties: {
            message: string;
            confirmationMessage: string;
            cancellationMessage: string;
            infoTable?: zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
            defaultValue?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "selectPrompt";
        properties: {
            message: string;
            choices: {
                value: string;
                label: string;
                key?: string | undefined;
                group?: string | undefined;
            }[];
            defaultValue?: string | undefined;
            infoTable?: zod.objectOutputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "textPrompt";
        properties: {
            message: string;
            defaultValue?: string | undefined;
            password?: boolean | undefined;
            allowEmpty?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "sleep";
        properties: {
            duration: number;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "taskbar";
        properties: {
            steps: {
                title: string;
                duration: number;
            }[];
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "concurrent";
        properties: {
            processes: {
                steps: {
                    duration: number;
                    startMessage?: string | undefined;
                    endMessage?: string | undefined;
                }[];
                prefix: string;
            }[];
            footer?: {
                shortcuts: {
                    key: string;
                    action: string;
                }[];
                subTitle?: string | undefined;
            } | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    })[];
    $schema?: string | undefined;
    command?: string | undefined;
}, {
    steps: ({
        type: "output";
        properties: {
            content: string;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "info";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "success";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "warning";
        properties: {
            headline?: string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | (string | {
                command: string;
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            })[] | undefined;
            body?: string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | {
                list: {
                    items: (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    } | (string | {
                        command: string;
                    } | {
                        link: {
                            label: string;
                            url: string;
                        };
                    } | {
                        char: string;
                    } | {
                        userInput: string;
                    } | {
                        subdued: string;
                    } | {
                        filePath: string;
                    } | {
                        bold: string;
                    })[])[];
                    title?: string | undefined;
                    ordered?: boolean | undefined;
                };
            })[] | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            reference?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
            link?: {
                label: string;
                url: string;
            } | undefined;
            customSections?: {
                body: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[]) & (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | {
                    list: {
                        items: (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        } | (string | {
                            command: string;
                        } | {
                            link: {
                                label: string;
                                url: string;
                            };
                        } | {
                            char: string;
                        } | {
                            userInput: string;
                        } | {
                            subdued: string;
                        } | {
                            filePath: string;
                        } | {
                            bold: string;
                        })[])[];
                        title?: string | undefined;
                        ordered?: boolean | undefined;
                    };
                })[] | undefined);
                title?: string | undefined;
            }[] | undefined;
            orderedNextSteps?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "fatalError";
        properties: {
            message: string;
            errorType: "abort" | "bug";
            tryMessage?: string | undefined;
            nextSteps?: (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            } | (string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            })[])[] | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "table";
        properties: {
            rows: zod.objectInputType<{}, zod.ZodUnion<[zod.ZodString, zod.ZodNumber, zod.ZodBoolean, zod.ZodNull, zod.ZodUndefined]>, "strip">[];
            columns: {} & {
                [k: string]: {
                    header?: string | undefined;
                    color?: string | undefined;
                };
            };
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "autocompletePrompt";
        properties: {
            message: string;
            choices: {
                value: string;
                label: string;
            }[];
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "confirmationPrompt";
        properties: {
            message: string;
            confirmationMessage: string;
            cancellationMessage: string;
            infoTable?: zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
            defaultValue?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "selectPrompt";
        properties: {
            message: string;
            choices: {
                value: string;
                label: string;
                key?: string | undefined;
                group?: string | undefined;
            }[];
            defaultValue?: string | undefined;
            infoTable?: zod.objectInputType<{}, zod.ZodArray<zod.ZodUnion<[zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, zod.ZodArray<zod.ZodType<string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }, zod.ZodTypeDef, string | {
                command: string;
            } | {
                link: {
                    label: string;
                    url: string;
                };
            } | {
                char: string;
            } | {
                userInput: string;
            } | {
                subdued: string;
            } | {
                filePath: string;
            } | {
                bold: string;
            }>, "many">]>, "many">, "strip"> | {
                header: string;
                items: (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                } | (string | {
                    command: string;
                } | {
                    link: {
                        label: string;
                        url: string;
                    };
                } | {
                    char: string;
                } | {
                    userInput: string;
                } | {
                    subdued: string;
                } | {
                    filePath: string;
                } | {
                    bold: string;
                })[])[];
                color?: string | undefined;
                helperText?: string | undefined;
            }[] | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "textPrompt";
        properties: {
            message: string;
            defaultValue?: string | undefined;
            password?: boolean | undefined;
            allowEmpty?: boolean | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "sleep";
        properties: {
            duration: number;
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "taskbar";
        properties: {
            steps: {
                title: string;
                duration: number;
            }[];
        };
        description?: string | undefined;
        title?: string | undefined;
    } | {
        type: "concurrent";
        properties: {
            processes: {
                steps: {
                    duration: number;
                    startMessage?: string | undefined;
                    endMessage?: string | undefined;
                }[];
                prefix: string;
            }[];
            footer?: {
                shortcuts: {
                    key: string;
                    action: string;
                }[];
                subTitle?: string | undefined;
            } | undefined;
        };
        description?: string | undefined;
        title?: string | undefined;
    })[];
    $schema?: string | undefined;
    command?: string | undefined;
}>;
type DemoSteps = zod.infer<typeof demoStepsSchema>;
export declare function demo(stepsJsonData: DemoSteps): Promise<void>;
export {};
