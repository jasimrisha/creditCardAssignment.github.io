import React, { Component } from "react";
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import InputAdornment from '@material-ui/core/InputAdornment';
import cardLogo from "./assets/images/visaCard.png"
import { CardActionArea, CardHeader, TextareaAutosize } from "@material-ui/core";
import { CardMedia, CardContent, Select, FormControl, Button } from "@material-ui/core";
import { InputLabel } from '@material-ui/core';
import chip from "./assets/images/chip.png"
import blackStrip from "./assets/images/blackStrip.jpeg"
import visaCard from "./assets/images/visa.png"
import masterCard from "./assets/images/mastercard.png"
import amexCard from "./assets/images/amex.png"
import dinersClubCard from "./assets/images/dinersclub.png"
import discoverCard from "./assets/images/discover.png"
import jcbCard from "./assets/images/jcb.png"
import unionPayCard from "./assets/images/unionpay.png"

import cardImage from "./assets/images/6.jpeg"
class CreditCardview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enteredDigit: "",
            age: '',
            months: [],
            cardNumber: '################',
            cardHolder: '',
            expirationDate: '', month: '', year: '', cvv: '',
            visaImage: false, masterImage: false, amexImage: false, dinersImage: false, discoverImage: false, jcbImage: false,
            unionpayImage: false,
            years: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
        }
    }
    componentDidMount() {
        let months = Array.from({ length: 12 }, (item, i) => {
            return new Date(0, i).toLocaleString('en-US', { month: 'numeric' })
        });

        this.setState({ months: months }, () => console.log("months", this.state.months))
    }

    handleChange = (e) => {
        console.log("value", e.target.name, e.target.value)
        if (e.target.name === 'card_number' && e.target.value.length === 0) {

            this.setState({ cardNumber: "################" })
        }
        else if (e.target.name === 'card_number' && e.target.value.length !== 0) {
            var visacardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
            var masterPattern = /^(?:5[1-5][0-9]{14})$/;
            var amexPattern = /^(?:3[47][0-9]{13})$/;
            var discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
            var unionPayPattern = /^(62[0-9]{14,17})$/;
            if (visacardno.test(e.target.value)) {
                this.setState({
                    visaImage: true, masterImage: false,
                    amexImage: false, dinersImage: false, discoverImage: false, jcbImage: false,
                    unionpayImage: false,
                })
            }
            else if (masterPattern.test(e.target.value)) {
                this.setState({
                    visaImage: false, masterImage: true,
                    amexImage: false, dinersImage: false, discoverImage: false, jcbImage: false,
                    unionpayImage: false,
                })
            }
            else if (amexPattern.test(e.target.value)) {
                this.setState({
                    visaImage: false, masterImage: false,
                    amexImage: true, dinersImage: false, discoverImage: false, jcbImage: false,
                    unionpayImage: false,
                })
            }
            else if (discPattern.test(e.target.value)) {
                this.setState({
                    visaImage: false, masterImage: false,
                    amexImage: false, dinersImage: false, discoverImage: true, jcbImage: false,
                    unionpayImage: false,
                })
            }
            else if (unionPayPattern.test(e.target.value)) {
                this.setState({
                    visaImage: false, masterImage: false,
                    amexImage: false, dinersImage: false, discoverImage: false, jcbImage: false,
                    unionpayImage: true,
                })
            }

            if (e.target.value.length === 1) {
                this.setState({ cardNumber: e.target.value + "###############" })
            }
            else if (e.target.value.length === 2) {
                this.setState({ cardNumber: e.target.value + "##############" })
            }
            else if (e.target.value.length === 3) {
                this.setState({ cardNumber: e.target.value + "#############" })
            }
            else if (e.target.value.length === 4) {
                this.setState({ cardNumber: e.target.value + "############" })
            }
            else if (e.target.value.length === 5) {
                this.setState({ cardNumber: e.target.value + "###########" })
            }
            else if (e.target.value.length === 6) {
                this.setState({ cardNumber: e.target.value + "##########" })
            }
            else if (e.target.value.length === 7) {
                this.setState({ cardNumber: e.target.value + "#########" })
            }
            else if (e.target.value.length === 8) {
                this.setState({ cardNumber: e.target.value + "########" })
            }
            else if (e.target.value.length === 9) {
                this.setState({ cardNumber: e.target.value + "#######" })
            }
            else if (e.target.value.length === 10) {
                this.setState({ cardNumber: e.target.value + "######" })
            }
            else if (e.target.value.length === 11) {
                this.setState({ cardNumber: e.target.value + "#####" })
            }
            else if (e.target.value.length === 12) {
                this.setState({ cardNumber: e.target.value + "####" })
            }
            else if (e.target.value.length === 13) {
                this.setState({ cardNumber: e.target.value + "###" })
            }
            else if (e.target.value.length === 14) {
                this.setState({ cardNumber: e.target.value + "##" })
            }
            else if (e.target.value.length === 15) {
                this.setState({ cardNumber: e.target.value + "#" })
            }
            else if (e.target.value.length === 16) {
                this.setState({ cardNumber: e.target.value })
            }



        }
        else if (e.target.name === 'card_holder') {
            this.setState({ cardHolder: e.target.value })
        }
        else if (e.target.name === 'expiration_date') {
            this.setState({ expirationDate: e.target.value })
        }
        else if (e.target.name === 'Months') {
            console.log("month")
            this.setState({ month: e.target.value }, () => console.log("month", this.state.month))
        }
        else if (e.target.name === 'Years') {
            console.log("month")

            this.setState({ year: e.target.value })
        }
        else if (e.target.name === 'cvv') {
            var cvv = /(\d{1,4})/g
            if (cvv.test(e.target.value)) {
                this.setState({ cvv: e.target.value })
            }
        }



    }

    render() {
        return (
            <>
                <div style={{ marginTop: '10%' }}>


                    <Grid container justify="center" >
                        <Grid item xs={12} md={6} sm={4} className="flip-card" >

                            <Card>
                                <Card style={{ height: '98px' }}>
                                </Card>
                                <CardContent style={{ marginTop: '-115px', width: '70%', marginLeft: '75px' }}>
                                    {this.state.cvv === "" && <Grid container className="credit_card_header " justify="space-between">
                                        <Grid item >
                                            <img src={chip} alt="" className="chipSize" />
                                        </Grid>
                                        <Grid item>
                                            {this.state.visaImage && <img src={visaCard} alt="" className="visaSize" />}
                                            {this.state.masterImage && <img src={masterCard} alt="" className="visaSize" />}
                                            {this.state.amexImage && <img src={amexCard} alt="" style={{ height: '30px', width: '100px', margin: '40px' }} />}
                                            {this.state.discoverImage && <img src={discoverCard} alt="" style={{ height: '30px', width: '80px', margin: '40px' }} />}
                                            {this.state.unionpayImage && <img src={unionPayCard} alt="" style={{ height: '30px', width: '80px', margin: '40px' }} />}

                                        </Grid>
                                        <Grid container justify="space-between" className="hashContainer">
                                            <Grid item className="bounce-2">
                                                {this.state.cardNumber !== "" && <p className="hash">{this.state.cardNumber && this.state.cardNumber.substring(0, 4)}</p>}
                                            </Grid>
                                            <Grid item className="bounce-2">
                                                {this.state.cardNumber !== "" && <p className="hash">{this.state.cardNumber && this.state.cardNumber.substring(4, 8)}</p>}
                                            </Grid>
                                            <Grid item className="bounce-2">
                                                {this.state.cardNumber !== "" && <p className="hash">{this.state.cardNumber && this.state.cardNumber.substring(8, 12)}</p>}
                                            </Grid>
                                            <Grid item className="bounce-2">
                                                {this.state.cardNumber !== "" && <p className="hash">{this.state.cardNumber && this.state.cardNumber.substring(12, 16)}</p>}
                                            </Grid>

                                        </Grid>

                                        <Grid container justify="space-between">
                                            <Grid item>
                                                <InputLabel style={{ color: 'white', marginLeft: '30px' }}>Card Holder</InputLabel>

                                            </Grid>
                                            <Grid item>
                                                <InputLabel style={{ color: 'white', marginRight: '30px' }}>Expires</InputLabel>

                                            </Grid>
                                        </Grid>

                                        <Grid container justify="space-between">
                                            <Grid item>
                                                {this.state.cardHolder === '' && <InputLabel style={{ color: 'white', marginLeft: '30px' }}>FULL NAME</InputLabel>}
                                                {this.state.cardHolder !== '' && <InputLabel style={{ color: 'white', marginLeft: '30px' }}>{this.state.cardHolder}</InputLabel>}

                                            </Grid>
                                            <Grid item>


                                                <InputLabel style={{ color: 'white', marginRight: '30px' }}>{this.state.month === '' ? 'MM' : (this.state.month)}/{this.state.year === '' ? 'YY' : this.state.year}</InputLabel>

                                            </Grid>
                                        </Grid>


                                    </Grid>}


                                    {this.state.cvv !== "" && <Grid container className="credit_card_header slide">
                                        <Grid item>
                                            <img src={blackStrip} alt="" className="blackStrip" />
                                        </Grid>
                                        <Grid item >
                                            <input name="cvv" id="outlined-basic" variant="outlined" style={{ marginLeft: '20px', width: '323%', height: '40px', backgroundColor: 'white' }}
                                                value="***"
                                            />
                                        </Grid>
                                        <Grid item style={{ marginTop: '63px', marginLet: '361px' }}>
                                            {this.state.visaImage && <img src={visaCard} alt="" className="visaBackSize" />}
                                            {this.state.masterImage && <img src={masterCard} alt="" className="visaBackSize" />}
                                            {this.state.amexImage && <img src={amexCard} alt="" style={{ height: '30px', width: '100px', marginLeft: '260px' }} />}
                                            {this.state.discoverImage && <img src={discoverCard} alt="" style={{ height: '30px', width: '80px', marginLeft: '500px' }} />}
                                            {this.state.unionpayImage && <img src={unionPayCard} alt="" style={{ height: '30px', width: '80px', margin: '260px' }} />}

                                        </Grid>
                                    </Grid>}
                                    <Grid container  >
                                        <Grid item xs={12} md={12} sm={12} >
                                            <InputLabel><p style={{ textAlign: 'left' }}>Card Number</p></InputLabel>
                                            <TextField type="number" name="card_number" id="outlined-basic" variant="outlined" style={{ width: '98%' }}
                                                onChange={(e) => { this.handleChange(e) }}
                                                inputProps={{ maxLength: 16 }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container  >
                                        <Grid item xs={12} md={12} sm={12} >
                                            <InputLabel><p style={{ textAlign: 'left' }}>Card Holders</p></InputLabel>
                                            <TextField name="card_holder" id="outlined-basic" variant="outlined" style={{ width: '98%' }}
                                                onChange={(e) => { this.handleChange(e) }} />
                                        </Grid>

                                    </Grid>
                                    <Grid container justify="center" >
                                        <Grid item xs={4} md={4} sm={4} >
                                            <InputLabel><p style={{ textAlign: 'left' }}>Expiration date</p></InputLabel>

                                            <FormControl variant="outlined" >

                                                <InputLabel htmlFor="outlined-age-native-simple">Months</InputLabel>
                                                <Select
                                                    name="months"
                                                    native
                                                    value={this.state.age}
                                                    onChange={() => this.state.handleChange()}
                                                    label="Months"
                                                    inputProps={{
                                                        name: 'Months',
                                                        id: 'outlined-age-native-simple',
                                                    }} onChange={(e) => { this.handleChange(e) }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    {this.state.months.map((aVal) => {
                                                        return (<option>{aVal}</option>)
                                                    })}

                                                </Select>
                                            </FormControl>
                                        </Grid>


                                        <Grid item xs={4} md={4} sm={4} >
                                            <InputLabel style={{ marginTop: '48px' }}></InputLabel>
                                            <FormControl variant="outlined" >
                                                <InputLabel htmlFor="outlined-age-native-simple">Years</InputLabel>
                                                <Select
                                                    name="years"
                                                    native
                                                    value={this.state.age}
                                                    onChange={() => this.state.handleChange()}
                                                    label="Years"
                                                    inputProps={{
                                                        name: 'Years',
                                                        id: 'outlined-age-native-simple',
                                                    }} onChange={(e) => { this.handleChange(e) }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    {this.state.years.map((aVal) => {
                                                        return (<option>{aVal}</option>)
                                                    })}

                                                </Select>
                                            </FormControl>
                                        </Grid>


                                        <Grid item xs={4} md={4} sm={4} >
                                            <InputLabel><p style={{ textAlign: 'left' }}>CVV</p></InputLabel>
                                            <TextField name="cvv" id="outlined-basic" label="CVV" variant="outlined" onChange={(e) => { this.handleChange(e) }} inputProps={{ maxLength: 3 }}
                                            />
                                        </Grid>
                                    </Grid>

                                </CardContent>

                                <CardActionArea style={{ marginLeft: '0px', marginBottom: '30px' }}>

                                    <Button variant="contained" color="primary" className="buttonWidth">Submit</Button>
                                </CardActionArea>
                            </Card>

                        </Grid>

                    </Grid>


                </div>
            </>
        )
    }
}

export default CreditCardview