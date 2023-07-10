import React from "react";

export default class About extends React.Component {
  state = { open: false };

  toggle = () => this.setState((prevState) => ({ open: !prevState.open }));

  render = () => (
    <>
      <h3>ABOUT ZERA AVRAHAM</h3>
      <div>
        Congregation Zera Abraham is well defined by its byline: Warm and
        Authentic Torah Living for Over a Century. It is a Shul- strongly Torah
        oriented, and a community of Torah Living. With vibrant minyanim,
        excellent shiurim and exciting programs, the Shul continues, year after
        year, one century through another, to provide enjoyable Yiddishkeit and
        opportunities for continued personal and collective growth, all while
        maintaining its age old authenticity.{" "}
      </div>

      {/*        <h4 onClick={this.toggle}>Click to learn about our org</h4>
    {this.state.open && <p>	Lots of text about the organization <br />
    Lots of text about the organization <br />
    Lots of text about the organization <br />
    Lots of text about the organization <br />
    Lots of text about the organization <br /></p>}
    */}
    </>
  );
}
