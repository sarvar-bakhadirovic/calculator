const _numbers = document.querySelectorAll('[data-numbers]')
const _operations = document.querySelectorAll('[data-operations]')
const _resultBtn = document.querySelector('[data-result]')
const _point = document.querySelector('[data-point]')
const _allClear = document.querySelector('[data-allClear]')
const _delete = document.querySelector('[data-delete]')
const _percent = document.querySelector('[data-percent]')
const _exclamation = document.querySelector('[data-exclamation]')
const _previousInput = document.querySelector('[data-previous]')
const _currentInput = document.querySelector('[data-current]')





_numbers.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault()

        

        if(!_previousInput.value){
            if(_currentInput.value.slice(-1) == _exclamation.value || _currentInput.value.slice(-1) == _percent.value) {
                _currentInput.value += ''
            } else {
                _currentInput.value += item.value
            }
        } else {
            _previousInput.value = ''
            _currentInput.value = item.value
        }
    })
})

_operations.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault()

        if(_currentInput.value.length == 0) {
            _currentInput.value = `0${item.value}`
        } else if(!_previousInput.value){
            if(_currentInput.value.slice(-1) == _exclamation.value) {
                _currentInput.value += ''
            } else if(_currentInput.value.slice(-1) == '/' || _currentInput.value.slice(-1) == '*' || _currentInput.value.slice(-1) == '-' || _currentInput.value.slice(-1) == '+' || _currentInput.value.slice(-1) == '%'){
                _currentInput.value += ''
            } 
            else {
                _currentInput.value += item.value
            }
        } else {
            _previousInput.value = ''
            _currentInput.value = `0${item.value}`
        }
    })
})

_point.addEventListener('click', e => {
    e.preventDefault()

    if(_currentInput.value.length == 0){
        _currentInput.value += `0${_point.value}`

    } else {
        if (_currentInput.value.slice(-1) != _point.value && _currentInput.value.slice(-1) != _exclamation.value && _currentInput.value.slice(-1) != _percent.value) {
            _currentInput.value += _point.value
        } else {
            _currentInput.value += ''
        }
    }
})

_exclamation.addEventListener('click', e => {
    e.preventDefault()

    if(_currentInput.value.length != 0 && !_currentInput.value.includes(_exclamation.value) && !_currentInput.value.includes(_percent.value)){
        _currentInput.value += _exclamation.value 
    } else {
        _currentInput.value = _currentInput.value
    }
})

_percent.addEventListener('click', e => {
    e.preventDefault()

    if(_currentInput.value.length != 0 && !_currentInput.value.includes(_percent.value) && !_currentInput.value.includes(_exclamation.value)){
        _currentInput.value += _percent.value 
    } else {
        _currentInput.value = _currentInput.value
    }
})


_delete.addEventListener('click', e => {
    e.preventDefault()
    
    _currentInput.value = _currentInput.value.slice(0, -1)
})

_allClear.addEventListener('click', e => {
    e.preventDefault()

    _previousInput.value = ''
    _currentInput.value = ''
})


_resultBtn.addEventListener('click', e => {
    e.preventDefault()

    if(_currentInput.value){

        if(_currentInput.value.slice(-1) == _exclamation.value){
            let number = _currentInput.value.slice(0, -1)

            let result = 1
            for(let i=0; i < number; i++){
                let n = number - i
                result *= n
            }

            _currentInput.value = result
        } else if(_currentInput.value.slice(-1) == _percent.value){
            let number = _currentInput.value.slice(0, -1)
            
            _currentInput.value = number / 100
        } 
        else {
            _previousInput.value = _currentInput.value
            _currentInput.value = (eval(_currentInput.value))
        }
    } else {
        _previousInput.value = ''
        _currentInput.value = 0
    }
})