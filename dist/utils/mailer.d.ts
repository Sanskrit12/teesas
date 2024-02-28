export declare function mailer(sendee: string, title: string, message: {
    html?: string;
    text?: string;
}, senderName?: string): Promise<unknown>;
