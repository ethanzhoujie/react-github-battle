import React from 'react'
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants'

export default class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }
        
        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }
    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

        return (
            <ul className='flex-center'>
                {languages.map((language) => (
                    <li key={language}>
                        <button
                            className='btn-clear btn-link'
                            style={language === this.state.selectedLanguage ? {color: 'rgb(187, 46, 31)'} : null}
                            onClick={() => this.updateLanguage(language)}>
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}