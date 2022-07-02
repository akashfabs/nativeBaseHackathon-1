function DURATION(duration) {

    const length = moment.duration(duration);h
    
    
    const hour = length.hours(); 
    const minute = length.minutes(); 
    const second = length.seconds(); 
    
    return hour + ':' + minute + ':' + second;
}
