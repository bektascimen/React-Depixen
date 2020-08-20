import React from 'react';
import './App.css';
import Field from "./Field";
import { Card,CardGroup,Button} from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                title: '',
                _text: '',
                image: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    handleInput(e) {
        var currentItem = {...this.state.currentItem}
        currentItem[e.target.name] = e.target.value
        this.setState({
            currentItem
        })
    }
    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem)
        if ( (newItem._text !== "") && (newItem.title !== "") && (newItem.image !== "")) {
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    _text: '',
                    title: '',
                    image: ''
                }
            })
        }
    }
    render() {
        return (
            <div>
                <header>
                    <div className="App">
                        <div style={{display:"inline-block"}}>
                        <form id="card" onSubmit={this.addItem}>
                            <CardGroup className="cga">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            <input type="text" name="title"
                                                   value={this.state.currentItem.title}
                                                   onChange={this.handleInput}
                                                   placeholder="Başlık giriniz"
                                            />
                                        </Card.Title>
                                        <Card.Text className="cta">
                                            <textarea name="_text" id="_text" cols="30" rows="10" maxLength="444"
                                                      value={this.state.currentItem._text}
                                                      onChange={this.handleInput}
                                                      placeholder="Maximum 444 karakterli metin giriniz."
                                            >X</textarea>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="cfa">
                                        <input type="file" name="image"
                                               value={this.state.currentItem.image}
                                               onChange={this.handleInput}
                                        />
                                    </Card.Footer>
                                </Card>
                            </CardGroup>

                            <div>
                                <Button variant="outline-primary" type="submit">Ekle</Button>
                            </div>
                        </form>
                        </div>
                        <Field items = {this.state.items??[]}> </Field>
                    </div>
                </header>
            </div>
        )
    }
}

export default App;
