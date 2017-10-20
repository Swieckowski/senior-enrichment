// Helper function that goes through an object and prunes it of keys with empty strings as values
export const objectDiscriminator = (formObject) => {
	let newObj = {};
	Object.keys(formObject).forEach((key)=>{
		if(formObject[key]!==""){
			newObj[key] = formObject[key];
		}
	})
	return newObj;
}
