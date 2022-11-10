import { getLoader, newTableHR } from '../module/datatables'
import { retrieveData, lastSeen } from '../module/xhr'
import 'datatables.net-fixedcolumns/js/dataTables.fixedColumns'
import 'datatables.net-bs/css/dataTables.bootstrap.min.css'

function setDateSummary() {
    const toDay = new Date()
    if (document.getElementById('HRsummary') === null) {
        document.getElementById('dtEnd').valueAsDate = toDay
        toDay.setDate(toDay.getDate() - 30)
        document.getElementById('dtStart').valueAsDate = toDay
    }
}


window.addEventListener('click', e => {

    if (e.target.className.includes('showHRsummary')) {
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
    setDateSummary()

    document.getElementById('myapp').appendChild(getLoader())
    retrieveData(
        document.getElementById('dtStart').value,
        document.getElementById('dtEnd').value,
        'nextcloud_users',
        newTableHR
    )
})