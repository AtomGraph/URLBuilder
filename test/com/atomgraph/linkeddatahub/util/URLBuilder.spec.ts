import { URLBuilder } from '../../../../../src/com/atomgraph/linkeddatahub/util/URLBuilder';
import { expect } from 'chai';
import 'mocha';

describe('URLBuilder', () =>
{

    it('example', () =>
    {
        let builder = URLBuilder.fromString("https://atomgraph.com").path("cases").path("nxp-semiconductors");
        let expected = new URL("https://atomgraph.com/cases/nxp-semiconductors").toString();
        let actual = builder.build().toString();

        expect(actual).to.equal(expected);
    });

    it('hash()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost").hash("hash");
        let expected = new URL("https://localhost#hash");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('existing hash()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost#hash").hash("new-hash");
        let expected = new URL("https://localhost#new-hash");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('hash(null)', () =>
    {
        let builder = URLBuilder.fromString("https://localhost#hash").hash(null);
        let expected = new URL("https://localhost");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('host()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost").host("host:42");
        let expected = new URL("https://host:42");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('hostname()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost:42").hostname("host");
        let expected = new URL("https://host:42");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('password()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost").username("user").password("pwd");
        let expected = new URL("https://user:pwd@localhost");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    //it('password() noop', () =>
    //{
    //    let builder = URLBuilder.fromString("https://localhost").password("pwd");
    //    let expected = new URL("https://localhost");
    //    let actual = builder.build();
    //
    //    expect(actual).to.deep.equal(expected);
    //});

    it('path()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost").path("path/more-path");
        let expected = new URL("https://localhost/path/more-path");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('existing path()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost/existing").path("path/more-path");
        let expected = new URL("https://localhost/existing/path/more-path");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('path(null)', () =>
    {
        let builder = URLBuilder.fromString("https://localhost/existing").path(null);
        let expected = new URL("https://localhost");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('port()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost").port("42");
        let expected = new URL("https://localhost:42");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('port(null)', () =>
    {
        let builder = URLBuilder.fromString("https://localhost:42").port(null);
        let expected = new URL("https://localhost");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('protocol()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost").protocol("ftp");
        let expected = new URL("ftp://localhost");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('search()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost").search("?what=ever&some=param");
        let expected = new URL("https://localhost?what=ever&some=param");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('search(null)', () =>
    {
        let builder = URLBuilder.fromString("https://localhost?what=ever&some=param").search(null);
        let expected = new URL("https://localhost");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('searchParam()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost").searchParam("what", "ever").searchParam("some", "param");
        let expected = new URL("https://localhost?what=ever&some=param");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('same name searchParam()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost?that=here").searchParam("what", "ever").searchParam("what", "else");
        let expected = new URL("https://localhost?that=here&what=ever&what=else");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('same name searchParam() multiple values', () =>
    {
        let builder = URLBuilder.fromString("https://localhost?that=here").searchParam("what", "ever", "else");
        let expected = new URL("https://localhost?that=here&what=ever&what=else");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('searchParam() no values', () =>
    {
        let builder = URLBuilder.fromString("https://localhost?that=here").searchParam("what");
        let expected = new URL("https://localhost?that=here");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('replaceSearchParam()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost?that=here&what=ever&what=else").replaceSearchParam("what", "smth").replaceSearchParam("blah", "other");
        let expected = new URL("https://localhost?that=here&what=smth&blah=other");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('same name replaceSearchParam()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost?that=here&what=ever&what=else").replaceSearchParam("what", "smth").replaceSearchParam("what", "other");
        let expected = new URL("https://localhost?that=here&what=other");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('replaceSearchParam() no values', () =>
    {
        let builder = URLBuilder.fromString("https://localhost?that=here&what=ever&what=else").replaceSearchParam("what");
        let expected = new URL("https://localhost?that=here");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

    it('username()', () =>
    {
        let builder = URLBuilder.fromString("https://localhost").username("user");
        let expected = new URL("https://user@localhost");
        let actual = builder.build();

        expect(actual).to.deep.equal(expected);
    });

});