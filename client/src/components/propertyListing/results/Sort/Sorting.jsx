import React, { Component } from 'react'
import history from '../../../history';
import { withRouter } from "react-router-dom";
import { setMaxListeners } from 'form-data';

class sorting extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            selectedOption: 'Roomph-Picks'
        };
        this.onValueChange = this.onValueChange.bind(this);
    }
    setShowModal() {
        this.setState({ showModal: !this.state.showModal })
    }
    onValueChange(event) {
        this.setState({ selectedOption: event.target.id });
        // console.log(this.state.selectedOption)
    }

    async sort(sortby, sort) {
        var desc = sort ? '2' : '1';
        this.props.setStateOfParentloading();
        this.setShowModal();
        console.log(sortby, sort);
        var resultArray = this.props.properties;
        if (sortby == 5) {
            if (sort == 0) {
                await resultArray.sort(function (a, b) {
                    return b.UserRating[0] - a.UserRating[0];
                });
            } else {
                await resultArray.sort(function (a, b) {
                    return a.UserRating[0] - b.UserRating[0];
                });
            }
        } else if (sortby == 4) {
            if (sort == 0) {
                await resultArray.sort(function (a, b) {
                    return b.MinRate[0] - a.MinRate[0];
                });
            } else {
                await resultArray.sort(function (a, b) {
                    return a.MinRate[0] - b.MinRate[0];
                });
            }
        } else if (sortby == 2) {
            if (sort == 0) {
                await resultArray.sort(function (a, b) {
                    return b.Rating[0] - a.Rating[0];
                });
            } else {
                await resultArray.sort(function (a, b) {
                    return a.Rating[0] - b.Rating[0];
                });
            }
        }


        setTimeout(() => {
            this.props.setStateOfParent(resultArray);
            this.props.setStateOfParentloading()
        }, 1000)


    }
    render() {

        return (
            <>
                <button className="Buttons mt-1" onClick={() => { this.setShowModal() }}>Sort</button>
                <div className={this.state.showModal ? 'sort-popup h-100 w-100 bg-white position-fixed z-index-999 top-0 sort-popup-show' : 'sort-popup h-100 w-100 bg-white position-fixed z-index-999 top-0 sort-popup-hide'}>
                    <p className="ft-18 line-height-21 gr-medium py-3 text-center bg-orange w-100 text-white z-index">Sort</p>
                    <a onClick={() => this.setShowModal()} className="p-3 top-0 position-absolute sort-popup-close z-index"> <i className="fa fa-angle-left d-inline-block text-white"></i> </a>
                    <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input custom-control-input-sort unchecked" id="Roomph-Picks" value="top" onChange={this.onValueChange} checked={this.state.selectedOption === "Roomph-Picks"} onClick={() => this.sort(4, 0)} />
                        <label className="custom-control-label custom-control-label-sort mb-2" for="Roomph-Picks">
                            <h5 className="roboto-bold ft-18 line-height-22 pt-1">Top Picks <span className="roboto-light ft-18 line-height-22"></span></h5>
                        </label>
                    </div>

                    <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input custom-control-input-sort unchecked" id="User-Reviews" onChange={this.onValueChange} checked={this.state.selectedOption === "User-Reviews"} name="sort" onClick={() => this.sort(5, 0)} />
                        <label className="custom-control-label custom-control-label-sort mb-2" for="User-Reviews">
                            <h5 className="roboto-medium ft-18 line-height-22 pt-1">Rating<span className="roboto-light ft-18 line-height-22">(High to Low)</span></h5>
                        </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input custom-control-input-sort unchecked" id="Reviews" name="RatingL" onChange={this.onValueChange} checked={this.state.selectedOption === "Reviews"} onClick={() => this.sort(5, 1)} />
                        <label className="custom-control-label custom-control-label-sort mb-2" for="Reviews">
                            <h5 className="roboto-medium ft-18 line-height-22 pt-1">Rating<span className="roboto-light ft-18 line-height-22">(Low to High)</span></h5>
                        </label>
                    </div>

                    <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input custom-control-input-sort unchecked" id="price-low-high" name="sort" onChange={this.onValueChange} checked={this.state.selectedOption === "price-low-high"} onClick={() => this.sort(4, 0)} />
                        <label className="custom-control-label custom-control-label-sort mb-2" for="price-low-high">
                            <h5 className="roboto-medium ft-18 line-height-22 pt-1">Price <span className="roboto-light ft-18 line-height-22"> (High to Low)</span></h5>
                        </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input custom-control-input-sort unchecked" id="Price" name="sort" value="high" onChange={this.onValueChange} checked={this.state.selectedOption === "Price"} onClick={() => this.sort(4, 1)} />
                        <label className="custom-control-label custom-control-label-sort mb-2" for="Price">
                            <h5 className="roboto-medium ft-18 line-height-22 pt-1">Price <span className="roboto-light ft-18 line-height-22">(Low to High)</span></h5>
                        </label>
                    </div>

                    <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input custom-control-input-sort unchecked" id="star-high-low" name="sort" onChange={this.onValueChange} checked={this.state.selectedOption === "star-high-low"} onClick={() => this.sort(2, 0)} />
                        <label className="custom-control-label custom-control-label-sort mb-2" for="star-high-low">
                            <h5 className="roboto-medium ft-18 line-height-22 pt-1">Stars <span className="roboto-light ft-18 line-height-22">(High to Low)</span></h5>
                        </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="radio" className="custom-control-input custom-control-input-sort unchecked" id="star-low-high" name="sort" onChange={this.onValueChange} checked={this.state.selectedOption === "star-low-high"} onClick={() => this.sort(2, 1)} />
                        <label className="custom-control-label custom-control-label-sort mb-2" for="star-low-high">
                            <h5 className="roboto-medium ft-18 line-height-22 pt-1">Stars <span className="roboto-light ft-18 line-height-22">(Low to High)</span></h5>
                        </label>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(sorting);