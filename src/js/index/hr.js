import { getLoader, newTableHR } from '../module/datatables'
import { retrieveData, lastSeen } from '../module/xhr'
import 'datatables.net-fixedcolumns/js/dataTables.fixedColumns'
import 'datatables.net-bs/css/dataTables.bootstrap.min.css'

function setDateLastSeen() {
    const toDay = new Date()
    if (document.getElementById('seen') === null) {
        toDay.setDate(toDay.getDate())
        document.getElementById('dtEnd').valueAsDate = toDay
        toDay.setDate(toDay.getDate() - 35)
        document.getElementById('dtStart').valueAsDate = toDay
    }
}

function setDateSummary() {
    const toDay = new Date()
    if (document.getElementById('seen') !== null) {
        document.getElementById('dtEnd').valueAsDate = toDay
        toDay.setDate(toDay.getDate() - 30)
        document.getElementById('dtStart').valueAsDate = toDay
    }
}


window.addEventListener('click', e => {

    if (e.target.className.includes('lastSeen')) {
        setDateLastSeen()
        document.getElementById('myapp').innerHTML = ''
        document.getElementById('myapp').appendChild(getLoader())
        lastSeen(document.getElementById('dtStart').value, document.getElementById('dtEnd').value)
    } else if (e.target.className.includes('showHRsummary')) {
        setDateSummary()
        document.getElementById('myapp').innerHTML = ''
        document.getElementById('myapp').appendChild(getLoader())
        retrieveData(document.getElementById('dtStart').value, document.getElementById('dtEnd').value, 'nextcloud_users', newTableHR)
    }
    else if (e.target.className.includes('helper')) {
        document.getElementById('helper').style.display = 'block'
    } else if (e.target.className.includes('modalClose')) {
        e.target.parentElement.parentElement.style.display = 'none'
    }
})


window.addEventListener('DOMContentLoaded', function () {
    const toDay = new Date()
    document.getElementById('dtStart').valueAsDate = toDay
    toDay.setDate(toDay.getDate() + 14)
    document.getElementById('dtEnd').valueAsDate = toDay

    document.getElementById('myapp').appendChild(getLoader())
    retrieveData(
        document.getElementById('dtStart').value,
        document.getElementById('dtEnd').value,
        'nextcloud_users',
        newTableHR
    )
})