const timeFormat = (minites) =>{
    const hours = Math.floor(minites /60);
    const minitesReminder = minites % 60;
    return `${hours}h ${minitesReminder}m`;
}

export default timeFormat