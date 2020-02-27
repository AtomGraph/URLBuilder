/**
 *  URLBuilder class for easier composition of URLs.
 *
 *  Example usage:
 *
 *  URLBuilder.fromURL("https://atomgraph.com").path("cases").path("nxp-semiconductors").build().toString();
 *
 *  Will return:
 *
 *  "https://atomgraph.com/cases/nxp-semiconductors"
 *
 *  This implementation does not support variable templates such as {var} as of yet.
 *
 *  @author Martynas Jusevičius <martynas@atomgraph.com>
 */
export declare class URLBuilder {
    private readonly url;
    protected constructor(url: URL);
    /**
     * Set hash (without "#")
     *
     * @param string hash
     * @returns {URLBuilder}
     */
    hash(hash: string | null): URLBuilder;
    /**
     * Set host
     *
     * @param string host
     * @returns {URLBuilder}
     */
    host(host: string): URLBuilder;
    /**
     * Set hostname
     *
     * @param string hostname
     * @returns {URLBuilder}
     */
    hostname(hostname: string): URLBuilder;
    /**
     * Set password
     *
     * @param string password
     * @return {URLBuilder}
     */
    password(password: string): URLBuilder;
    /**
     * Append path
     *
     * @param string path
     * @returns {URLBuilder}
     */
    path(path: string | null): URLBuilder;
    /**
     * Set port
     *
     * @param string port
     * @returns {URLBuilder}
     */
    port(port: string | null): URLBuilder;
    /**
     * Set protocol
     *
     * @param string protocol
     * @return {URLBuilder}
     */
    protocol(protocol: string): URLBuilder;
    /**
     * Set a query string (with leading "?")
     *
     * @param string search
     * @returns {URLBuilder}
     */
    search(search: string | null): URLBuilder;
    /**
     * Add a query name=value pair.
     * Multiple values are allowed.
     *
     * @param string name
     * @param string value
     * @returns {URLBuilder}
     */
    searchParam(name: string, ...values: string[]): URLBuilder;
    /**
     * Replace a query param
     * Multiple values are allowed.
     *
     * @param string name
     * @param string value
     * @returns {URLBuilder}
     */
    replaceSearchParam(name: string, ...values: string[]): URLBuilder;
    /**
     * Set username
     *
     * @param string username
     * @return {URLBuilder}
     */
    username(username: string): URLBuilder;
    /**
     * Build URL object
     *
     * @returns {URL}
     */
    build(): URL;
    /**
     * Create a new instance from an existing URL.
     *
     * @param URL url
     * @returns {URLBuilder}
     */
    static fromURL(url: URL): URLBuilder;
    /**
     * Create a new instance from string and optional base.
     *
     * @param string url
     * @param string base
     * @returns {URLBuilder}
     */
    static fromString(url: string, base?: string): URLBuilder;
}
