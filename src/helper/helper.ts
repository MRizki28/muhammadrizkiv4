class Helper {
    formatYear(year: string) {
        const date = new Date(year);
        const option: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short'
        }
    
        return date.toLocaleDateString('en-US', option);
    }
}

export default new Helper();