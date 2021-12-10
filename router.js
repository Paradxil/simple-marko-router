class Router {
    constructor() {
        this.routes = [];
        this.listeners = {};
        this.baseRoute = "";
    }

    /**
     * Initialize the router.
     * @param {Array<String>} routes A list of available routes as strings.
     * @param {String} baseRoute The base route or path, prepended before all paths.
     */
    initialize(routes, baseRoute) {
        if(baseRoute instanceof String || typeof baseRoute === 'string') {
            this.baseRoute = baseRoute;
        }
        else if(baseRoute != null) {
            console.error('baseRoute must be of type string.');
        }

        if(!(routes instanceof Array)){
            console.error('routes must be of type array.');
            return;
        }

        if(routes.length === 0) {
            console.warn('No routes are defined.');
        }

        //Build regex search strings and params ids for each route.
        for(let route of routes) {
            // Find param ids of the form /:id
            let routeParams = route.match(/:[^\/]*(\/|$)/gi);

            let p = route.replaceAll('/', '\\/');

            // Replace all params with wildcards to allow for matching.
            p = route.replaceAll(/:[^\/]*(\/|$)/gi, '([^\\\/]+)(?:\\\/|$)');

            // All route matches should end with the end of the string.
            p += '$';

            let search = new RegExp(p, 'i');

            this.routes.push({
                path: route,
                search: search,
                params: routeParams
            });
        }

        window.addEventListener('popstate', (event) => {
            this.navigate(event.state.path);

            if(this.listeners['popstate']) {
                for(let cb of this.listeners['popstate']) {
                    cb(event);
                }
            }
        })
    }
    
    navigate(path) {
        if(path.startsWith(this.baseRoute)) {
            path = path.replace(this.baseRoute, '');
        }

        history.pushState({path: path}, "", this.baseRoute + path);

        let matchData = this.match(path);
    
        if(this.listeners['navigate']) {
            for(let cb of this.listeners['navigate']) {
                if(matchData === false)
                {
                    cb(-1, null, null, null);
                }
                else {
                    cb(matchData.index, this.routes[matchData.index], path, matchData.params);
                }
            }
        }
    }

    /**
     * Find the first matching route for a path.
     * @param {String} path 
     * @returns The index, and param values. False for no route found.
     */
    match(path) {
        let paramValues = {};
        let routeIndex = 0;
        let foundMatch = false;

        for(let route of this.routes) {
            let matches = path.match(route.search);
            if(matches !== null && matches.index === 0) {
                // We found a matching route!
                // Now gather the param values so we can return them.
                for(let i = 0; i + 1 < matches.length && i < route.params.length; i++) {
                    paramValues[route.params[i].replaceAll(/[\/:]/g, '')] = matches[i + 1]; 
                }

                foundMatch = true;
                break;
            }

            routeIndex += 1;
        }

        if(foundMatch) {
            return {index: routeIndex, params: paramValues};
        }

        return false;
    }
    
    listen(event, callback) {
        if(!this.listeners[event]) {
            this.listeners[event] = [];
        }
    
        this.listeners[event].push(callback);
    }

}

const _router = new Router();
export default _router;
export const navigate = _router.navigate.bind(_router);
export const listen = _router.listen.bind(_router);
