import { flatten, propOr } from 'ramda';

export const generateCode = (input, prefix, size) => {
	if (!input || !prefix || !size) {
		return;
	}
	const s = "000000000" + input;
  return prefix + s.substr(s.length-size);
};

export const enumerable = (target) => {
  const props = Reflect.ownKeys(target);
  const keys = [];
  
  for(let key of props) {
    if (target.hasOwnProperty(key) && target[key] === undefined) {
      target[key] = key;
      keys.push(key);
    }
  }
  
  Reflect.defineProperty(target, 'keys', {
    get: () => { return keys },
    static: true
  });
}

export const program = (...list) => (acc) => 
  flatten(list).reduce((acc,fn) => acc.then(fn), Promise.resolve(acc));

export const getParamsFromRequest = (param) => propOr('', param);