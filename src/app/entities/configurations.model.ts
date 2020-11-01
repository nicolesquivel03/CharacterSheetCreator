export class Configurations {
    magicEnabled: boolean;
    settings: Map<string, string>;

    constructor (magicEnabled, settings) {
        this.magicEnabled = magicEnabled;
        this.settings = settings;
    }
}
