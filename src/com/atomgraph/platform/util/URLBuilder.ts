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

export class URLBuilder
{

    private readonly url: URL;

    protected constructor(url: URL)
    {
        this.url = url;
    };

    /**
     * Set hash (without "#")
     * 
     * @param string hash
     * @returns {URLBuilder}
     */
    public hash(hash: string | null): URLBuilder
    {
        if (hash == null) this.url.hash = "";
        else this.url.hash = "#" + hash;

        return this;
    };

    /**
     * Set host
     * 
     * @param string host
     * @returns {URLBuilder}
     */
    public host(host: string): URLBuilder
    {
        this.url.host = host;

        return this;
    };

    /**
     * Set hostname
     * 
     * @param string hostname
     * @returns {URLBuilder}
     */
    public hostname(hostname: string): URLBuilder
    {
        this.url.hostname = hostname;

        return this;
    };

    /**
     * Set password
     * 
     * @param string password
     * @return {URLBuilder}
     */
    public password(password: string): URLBuilder
    {
        this.url.password = password;

        return this;
    };

    /**
     * Append path 
     * 
     * @param string path
     * @returns {URLBuilder}
     */
    public path(path: string | null): URLBuilder
    {
        if (path == null) this.url.pathname = "";
        else
        {
            if (this.url.pathname.length === 0)
            {
                if (!path.startsWith("/")) path = "/" + path;
                this.url.pathname = path;
            }
            else
            {
                if (!path.startsWith("/") && !this.url.pathname.endsWith("/")) path = "/" + path;
                this.url.pathname += path;
            }
        }

        return this;
    };

    /**
     * Set port
     * 
     * @param string port
     * @returns {URLBuilder}
     */
    public port(port: string | null): URLBuilder
    {
        if (port == null) this.url.port = "";
        else this.url.port = port;

        return this;
    };

    /**
     * Set protocol
     * 
     * @param string protocol
     * @return {URLBuilder}
     */
    public protocol(protocol: string): URLBuilder
    {
        this.url.protocol = protocol;

        return this;
    };

    /**
     * Set a query string (with leading "?")
     * 
     * @param string search
     * @returns {URLBuilder}
     */
    public search(search: string | null): URLBuilder
    {
        if (search == null) this.url.search = "";
        else this.url.search = search;

        return this;
    };

    /**
     * Add a query name=value pair.
     * Multiple values are allowed.
     * 
     * @param string name
     * @param string value
     * @returns {URLBuilder}
     */
    public searchParam(name: string, ...values: string[]): URLBuilder
    {
        for (let value of values)
            this.url.searchParams.append(name, value);

        return this;
    };

    /**
     * Replace a query param
     * Multiple values are allowed.
     *
     * @param string name
     * @param string value
     * @returns {URLBuilder}
     */
    public replaceSearchParam(name: string, ...values: string[]): URLBuilder
    {
        this.url.searchParams.delete(name);

        for (let value of values)
            this.url.searchParams.append(name, value);

        return this;
    };

    /**
     * Remove a query param
     *
     * @param string name
     * @returns {URLBuilder}
     */
    public removeSearchParam(name: string): URLBuilder
    {
        this.url.searchParams.delete(name);

        return this;
    };

    /**
     * Set username
     * 
     * @param string username
     * @return {URLBuilder}
     */
    public username(username: string): URLBuilder
    {
        this.url.username = username;

        return this;
    };

    /**
     * Build URL
     * 
     * Example usage:
     * 
     * URLBuilder.newInstance().host("coolwebsite.com").path("en").path("news").path("1234");
     * 
     * Will return
     * 
     * "http://coolwebsite.com/en/news/1234"
     * 
     * @returns {URL}
     */
    public build(): URL
    {
        return this.url;
    };

    /**
     * Create a new instance from an existing URL.
     * 
     * @param string uri
     * @returns {URLBuilder}
     */
    public static fromURL(url: string, base?: string): URLBuilder
    {
        return new URLBuilder(new URL(url, base));
    };

}