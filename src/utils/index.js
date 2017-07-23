export const queryString = params => Object.entries(params)
    .map(([name, value]) => `${name}=${value}`)
    .join('&');
