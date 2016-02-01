describe('Chapter 7. Symbols', () => {

    it('should prove that symbol\' are primitives', () => {
        expect(typeof Symbol()).toBe('symbol')
    });

    it('should use symbol as object property', () => {
        const KEY = Symbol();
        const obj = {
            [KEY]() {
                return 'symbol as key';
            }
        };

        expect(obj[KEY]()).toBe('symbol as key');
    });

    it('should retrieve object properties & symbols', () => {
        const s = Symbol('test');
        const obj = {
            test: 'test string key',
            [s]: 'test symbol key'
        };

        expect(Object.getOwnPropertyNames(obj)[0]).toBe('test');
        expect(Object.getOwnPropertySymbols(obj)[0]).toBe(s);
    });

    it('should use symbols as enums', () => {
        const RED = Symbol('red');
        const GREEN = Symbol('green');
        const BLUE = Symbol('blue');

        function getHex(color) {
            switch (color) {
                case RED:
                    return 'ff0000';
                case GREEN:
                    return '00ff00';
                case BLUE:
                    return '0000ff';
                default:
                    return null;
            }
        }

        expect(getHex(BLUE)).toBe('0000ff');
        expect(getHex('blue')).toBe(null);
    });

});
