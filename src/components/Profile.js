import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { withRouter } from "react-router-dom";
import { addComment } from "../redux/actionCreators";
import moment from "moment";
import { filterCalendar } from "../redux/actionCreators";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import ParticlesContainer from "./ParticlesContainer";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function formatState(states) {
  let stateArray = states.split(",");
  return stateArray
    .filter((state) => state === "MD" || state === "VA" || state === "DC")
    .join(", ");
}

class Profile extends Component {
  handleDateChange = (e, park) => {
    fetch(`https://parkback.herokuapp.com/favorites/${park.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: e,
      }),
    })
      .then((res) => {
        if (res.ok) {
          swal("Visted date saved successfully");
          return res.json();
        }
      })
      .then((calendar) => {
        this.props.filterCalendar(calendar);
      });
  };

  render() {
    let i = 1;
    let index = 1;
    const onHandleSubmit = (e, park) => {
      fetch(`https://parkback.herokuapp.com/favorites/${park.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          park_id: this.props.parks.find(
            (park) =>
              park.fullName ===
              e.target.parentElement.parentElement.children[1].innerText
          ).id,
          user_id: this.props.user.id,
          comment:
            e.target.parentElement.parentElement.children[4].firstChild.value,
        }),
      })
        .then((res) => {
          if (res.ok) {
            swal("Your comment saved successfully");
            return res.json();
          }
        })
        .then((comment) => {
          this.props.addComment(comment);
        });
    };

    return (
      <div className="profileBackground">
        <div className="profileContainer">
          <div className="userProfile">
            <form>
              <div id="userProfileTable" className="form-group row">
                <label htmlFor="inputEmail3" className="col-form-label">
                  User Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="username"
                    disabled
                    value={this.props.user.name}
                  />
                </div>
                <label htmlFor="inputEmail3" className=" col-form-label">
                  User Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="useremail"
                    disabled
                    value={this.props.user.email}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="profileImageCenter">
            <Table className="table table-hover">
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Park Name</Th>
                  <Th>Park State</Th>
                  <Th>Visited Date</Th>
                  <Th>Comments</Th>
                </Tr>
              </Thead>

              {!this.props.user.favorites
                ? null
                : this.props.user.favorites.map((park) => (
                    <Tbody key={i++}>
                      <Tr>
                        <Th scope="row">{index++}</Th>
                        <Td>
                          <a href={`/parklist/${park.park.fullName}`}>
                            {park.park.fullName}
                          </a>
                        </Td>
                        <Td>{formatState(park.park.states)}</Td>
                        <Td>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            {park.date === null ? (
                              <DatePicker
                                value={moment(new Date()).format("YYYY-MM-DD")}
                                onChange={(e) => this.handleDateChange(e, park)}
                              />
                            ) : (
                              <DatePicker
                                value={park.date}
                                onChange={(e) => this.handleDateChange(e, park)}
                              />
                            )}
                          </MuiPickersUtilsProvider>
                        </Td>
                        <Td>
                          <textarea
                            className="profileComment"
                            placeholder="Comments"
                            defaultValue={park.comment}
                          />
                        </Td>
                        <Td>
                          <button
                            style={{ marginTop: "0.3em" }}
                            onClick={(e) => onHandleSubmit(e, park)}
                          >
                            Submit
                          </button>
                        </Td>
                      </Tr>
                    </Tbody>
                  ))}
            </Table>
          </div>
        </div>
        <ParticlesContainer className="particles"></ParticlesContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    parks: state.parks,
    user: state.loggedInUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => {
      dispatch(addComment(comment));
    },
    filterCalendar: (calendar) => {
      dispatch(filterCalendar(calendar));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
