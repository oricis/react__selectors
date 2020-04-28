import React from 'react';
import logo from './logo.svg';
import LangSelector from './components/LangSelector.jsx';
import GenericSelector from './components/GenericSelector.jsx';
import { langCodes, people } from './data/options.js';
import './App.css';

function Trans(props)
{
    return <span>{props.text}</span>;
}

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            person: this.getDefaultValue(people, 'name'),
            lang: 'EN'
        };
    }

    render()
    {
        console.log('render()', 'LANG: '
            + this.state.lang, 'Person: '
            + this.state.person); // HACK:

        const langSelector = (
            <LangSelector value={this.state.lang}
                data={langCodes}
                onChange={(lang) => { this.onChangeSelectedLang(lang) }}>
            </LangSelector>
        );

        const selectedPersonKey = this.state.person.toLowerCase();
        const peopleSelector = (
            <GenericSelector value={selectedPersonKey}
                data={people}
                label="name"
                onChange={(lang) => { this.onChangeSelectedData(lang) }}>
            </GenericSelector>
        );

        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <h2 className="xxx">
                    <Trans>Pruebas select</Trans>
                </h2>

                {langSelector}
                {peopleSelector}
            </header>
        );
    }


    getDefaultValue(arrObjects, propertyName)
    {
        let result = '';
        for (const index in arrObjects) {
            const object = arrObjects[index]

            if (object.default) {
                result = object[propertyName];
            }
        }

        return result;
    }

    onChangeSelectedData = (value) =>
    {
        console.log('onChangeSelectedData() -> ' + value);

        if (this.state && value !== this.state.person) {
            this.setState({
                person: value
            });
        }
    }

    onChangeSelectedLang = (value) =>
    {
        console.log('onChangeSelectedLang() -> ' + value);

        if (this.state && value !== this.state.lang) {
            this.setState({
                lang: value
            });
        }
    }
}

export default App;
