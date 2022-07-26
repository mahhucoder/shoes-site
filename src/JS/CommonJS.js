export class CommonJS {
    /**
     * 
     * @param {*} date1 giá trị date 1
     * @param {*} date2 giá trị date 2
     * @returns 1 nếu date1 > date2, 0 nếu date2 > date1, 2 nếu 2 date bằng nhau
     */
    static compareDate(date1, date2) {
        const dateCompare1  = new Date(date1);
        const dateCompare2 = new Date(date2);

        if(dateCompare1.getTime() > dateCompare2.getTime())
            return 1;

        else if(dateCompare1.getTime() < dateCompare2.getTime())
            return 0;
        return 2
    }

    static getDate(dateIn){
        const date = new Date(dateIn);

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}