const moscowTime = document.getElementById('moscow_time')
const moscowDate = document.getElementById('moscow_timezone')
const parisTime = document.getElementById('paris_time')
const parisDate = document.getElementById('paris_timezone')
const newYorkTime = document.getElementById('new_york_time')
const newYorkDate = document.getElementById('new_york_timezone')
const londonTime = document.getElementById('london_time')
const londonDate = document.getElementById('london_timezone')
const itemsBtn = document.querySelectorAll('button')
const content = document.querySelectorAll(".content")


// convert days and months
const days = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'}
const months = {
                0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'Jule', 7: 'August',
                8: 'September', 9: 'October', 10: 'November', 11: 'December'
               }


function getTimeZone() {

    // get date and time
    let moscow = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})
    let paris = new Date().toLocaleString("en-US", {timeZone: "Europe/Paris"})
    let newYork = new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
    let london = new Date().toLocaleString("en-US", {timeZone: "Europe/London"})
    moscow = new Date(moscow)
    paris = new Date(paris)
    newYork = new Date(newYork)
    london = new Date(london)

    // render to html data
    moscowTime.textContent = getTime(moscow)
    moscowDate.textContent = getDate(moscow)
    parisTime.textContent = getTime(paris)
    parisDate.textContent = getDate(paris)
    newYorkTime.textContent = getTime(newYork)
    newYorkDate.textContent = getDate(newYork)
    londonTime.textContent = getTime(london)
    londonDate.textContent = getDate(london)
}

// get content and make visible display for current content 
itemsBtn.forEach((item) => {
    item.addEventListener("click", () => {
        let tabId = item.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)

        content.forEach((item) => {
            item.classList.remove('active')
        })

        currentTab.classList.add('active')
    })
})

// function returns date in new format
function getDate(city) {
    const dayIndex = city.getDay()
    const monthIndex = city.getMonth()
    const date = {
            dayOfTheWeek :  days[dayIndex],
            month:  months[monthIndex],
            day: city.getDate(),
            year:  city.getFullYear(),
        }

    return `${date.dayOfTheWeek}, ${date.day} ${date.month} ${date.year}`
}

// function returns time 
function getTime(city){
    const time = city.toLocaleString().split(', ')

    return time[time.length-1]
}

// calls function every second
getTimeZone()
setInterval(getTimeZone, 1000)
    

    


