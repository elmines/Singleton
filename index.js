//@flow

export default class Singleton<T>
{
	initialized: boolean;
	buildFunc: () => T;
	instance: T;

	constructor(buildFunc: () => T)
	{
		this.initialized = false;
		this.buildFunc = buildFunc;
		//instance is left uninitialized
	}

	getInstance(): T
	{
		if (!this.initialized)
		{
			this.instance = this.buildFunc();
			this.initialized = true;
		}
		return this.instance;
	}
}
	
