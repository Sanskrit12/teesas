declare class Logger {
    private readonly LOG_FILE;
    private logger;
    constructor();
    error(data: any): {
        console: (arg?: any) => void;
    };
    log(data: any): {
        console: (arg?: any) => void;
    };
    warn(data: any): {
        console: (arg?: any) => void;
    };
    debug(data: any): {
        console: (arg?: any) => void;
    };
    info(data: any): {
        console: (arg?: any) => void;
    };
    verbose(data: any): {
        console: (arg?: any) => void;
    };
}
declare const _default: Logger;
export default _default;
