/**
 * All register api helper
 * @since 1.0.0
 */

const url = (api: string, from: string) => {
	if ( from == 'free' ) {
		return `/wam/v1/${api}`;
	} else if ( from == 'pro' ) {
		return `/wamp/v1/${api}`;
	}
};

const get = (api: string, args = '', from = 'free' ) => {
    return wp.apiFetch({
		path: `${url(api, from)}/?${args}`
	});
};

const getS = ( api: string, id: number, from = 'free') => {
	return wp.apiFetch({
		path: `${url(api, from)}/${id}`
	});
};

const add = ( api: string, data: any, from = 'free') => {
	return wp.apiFetch({
		path: `${url(api, from)}`,
		method: 'POST',
		data
	});
};

const edit = (api: string, id: number, data: any, from = 'free') => {
	return wp.apiFetch({
		path: `${url(api, from)}/${id}`,
		method: 'PUT',
		data
	});
};

const del = (api: string, id: string, from = 'free') => {
	return wp.apiFetch({
		path: `${url(api, from)}/${id}`,
		method: 'DELETE'
	});
};

export default {
	add,
	get,
	getS,
	edit,
	del
};
