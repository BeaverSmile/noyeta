class ListFactory {
    constructor(list_name) {
        this.list = null;
		
		console.log("INSIDE CONSTRUCTOR")
		console.log(list_name)
		
		if (list_name === "a_list") {		
			this.list = a_list;
		} else if (list_name === "b_list") {
			this.list = b_list;
		} else if (list_name === "c_list") {
			this.list = c_list;
		} else if (list_name === "d_list") {
			this.list = d_list;
		} else if (list_name === "e_list") {
			this.list = e_list;
		} else if (list_name === "f_list") {
			this.list = f_list;
		} else if (list_name === "g_list") {
			this.list = g_list;
		} else if (list_name === "h_list") {
			this.list = h_list;
		}	
    }
    
    list() {
        return this.list;
    }
}
