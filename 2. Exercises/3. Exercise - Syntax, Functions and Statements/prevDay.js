function prevDate(year, mth, day) {
    let dateString = year + '-' + mth + '-' + day;
    let event = new Date(dateString);
    event.setDate(day - 1);
    console.log(event.getFullYear() + `-` + (Number(event.getMonth()) + 1) + '-' + event.getDate());
}

prevDate(2016, 9, 30);
prevDate(2016, 10, 1);