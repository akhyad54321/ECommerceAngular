export class Customer {

    // Type1 Declaration
    // custId: number;
    // custName: string;
    // mobileNo: string;
    // emailId: string;
    // address: string;

    // constructor(custId: number, custName: string, mobileNo: string, emailId: string, address: string) {
    //     this.custId = custId;
    //     this.custName = custName;
    //     this.mobileNo = mobileNo;
    //     this.emailId = emailId;
    //     this.address = address;
    // }

    // //  Type 2 Declaration
    // custId: number = 0;
    // custName: string = '';
    // mobileNo: string = '';
    // emailId: string = '';
    // address: string = '';

    //  Type 3 Declaration
    custId: number;
    custName: string;
    mobileNo: string;
    emailId?: string; // here ? means not important i.e similar to @Transient annotation. 
    address?: string;

    constructor(){
        this.custId = 0;
        this.custName = '';
        this.mobileNo = '';
    }

}