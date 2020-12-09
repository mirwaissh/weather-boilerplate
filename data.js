/* all that has to do with data collection */
import api from './api.js'
class Data{
    static getData(){
        fetch(api.URL)
    }
}

export default Data