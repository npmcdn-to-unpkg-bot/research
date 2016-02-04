describe('Chapter 8. Template literals', () => {

    it('should use template interpolation', () => {
        const x = 2;
        expect(`${x}+${x}=${x+x}`).toBe('2+2=4');
    });

    it('should use tagged template', () => {
        const t = (strs, ...substs) => strs.join(',') + '-' + substs.join(',');
        expect(t`some ${'realy'} unuseful ${'stuff'}`).toBe('some , unuseful ,-realy,stuff');
    });

});
