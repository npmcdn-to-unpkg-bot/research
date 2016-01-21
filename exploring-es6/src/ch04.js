describe('Chapter 4. First steps with ECMAScript 6', () => {

    it('should not access block scoped vars outside their block', () => {
        {
            let x = 'a';
            const y = 'b';
        }

        expect(() => x).toThrow();
        expect(() => y).toThrow();
    });

    it('should interpolate string template', () => {
        const x = 1;
        const y = 2;

        expect(`${x}+${y}`).toBe('1+2');
    });

    it('should use arrow function', () => {
        const arr = [1, 2, 3];
        const arrExp = arr.map(e => e * e);

        expect(arrExp).toEqual([1, 4, 9]);
    });

    it('should use destructing for complex return values', () => {
        const date = ['2016', '01', '18'];
        const person = {
            name: 'Jhon',
            job: 'manager',
            age: 34,
            isLonely: false
        };

        const [year, month, day] = date;
        const {name, age} = person;

        expect(year).toBe('2016');
        expect(month).toBe('01');
        expect(day).toBe('18');
        expect(name).toBe('Jhon');
        expect(age).toBe(34);
    });

    it('should concatenate inside a for-of loop', () => {
        const arr = ['life', 'is', 'good', 'most', 'of', 'the', 'time'];
        let result = '';

        for (const [index, word] of arr.entries()) {
            if (index < 2) {
                result += word + ' ';
            } else {
                result += word;
                break;
            }
        }

        expect(result).toBe('life is good');
    });

    it('should handle default parameter values', () => {
        const f = (x = 5) => x;

        expect(f(10)).toBe(10);
        expect(f()).toBe(5);
    });

    it('should handle named parameter values', () => {
        const f = ({start=0, end=1} = {}) => end - start;

        expect(f({start: 1, end:5})).toBe(4);
        expect(f()).toBe(1);
    });

    it('should make use of rest parameters', () => {
        const f = (...grades) => Math.max.apply(null, grades);

        expect(f(1, 5, 2, 4, 9, 7)).toBe(9);
    });

    it('should make use of the spread operator', () => {
        const max = Math.max(...[1, 5, 2, 4, 9, 7]);
        let arr = [1, 2];

        arr.push(...[3, 4]);

        expect(max).toBe(9);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

});
