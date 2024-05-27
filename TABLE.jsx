import React from "react";
class Timetable extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY</h1>
                <h1 style={{ textAlign: "center" }}>DEPARTMENT OF COMPUTER ENGINEERING AND TECHNOLOGY</h1>
                <h2 style={{ textAlign: "center" }}>CLASS TIME TABLE FOR AY-2023-24   VI SEM</h2>
                <table align="center" border="5" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Day/Period</th>
                            <th>I <br />9:10-10:10 AM</th>
                            <th>II <br />10:10-11:10 AM</th>
                            <th>III <br />11:15 AM-12:15 PM</th>
                            <th><br />12:15-01:00 PM</th>
                            <th>IV <br />01:00-02:00 PM</th>
                            <th>V <br />02:00-03:00 PM</th>
                            <th>VI <br />03:05-04:05 PM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align="center"><b>Monday</b></td>
                            <td align="center">P.E.II SC</td>
                            <td align="center">SE</td>
                            <td align="center">BPA</td>
                            <td align="center" rowSpan="6">
                                <h2>L <br />U <br />N <br />C <br />H <br />B <br />R<br />E<br/>A<br />K </h2>
                            </td>
                            <td align="center" colSpan="3">BPA LAB @TPO1</td>
                            
                            
                        </tr>
                        <tr>
                            <td align="center"><b>Tuesday</b></td>
                            <td align="center">TOC</td>
                            <td align="center" colSpan="2">UML LAB B1 & ES LAB B2</td>
                            <td align="center">SE</td>
                            <td align="center">PE-2SC@302 VAPT@301</td>
                            <td align="center">UHV</td>

                        </tr>
                        <tr>
                            <td align="center"><b>Wednesday</b></td>
                            <td align="center">BPA</td>
                            <td align="center">PE2SC@LAB9 AND VAPT@301</td>
                            <td align="center">TOC</td>
                            <td align="center">OE2TWS@A301 FN@LAB9</td>
                            <td align="center">UHV</td>
                            <td align="center">SPORTS</td>
                        </tr>
                        <tr>
                            <td align="center"><b>Thursday</b></td>
                            <td align="center">TOC</td>
                            <td align="center">SC</td>
                            <td align="center">LIBRARY</td>
                            <td align="center">PE2 SCLAB9 VAPT@A301</td>
                            <td align="center">BPA</td>
                            <td align="center">OE TWS@A301 FM @A302</td>
                    
                        </tr>
                        <tr>
                            <td align="center"><b>Friday</b></td>
                            <td align="center">UHV</td>
                            <td align="center">SE</td>
                            <td align="center">OEII TWS@301 FM@A302</td>
                            <td align="center">MENTORING</td>
                            <td align="center"colSpan="2">UML LAB B1@LAB9 ES LAB (B2)</td>
                        </tr>
                        <tr>
                            <td align="center"><b>Saturday</b></td>
                            <td align="center" colSpan="2">VAPT LAB@TPO3 SC LAB@LAB10</td>
                            <td align="center">BPA</td>
                            <td align="center">TOC</td>
                            <td align="center">TWS@301 ESLAB(B2)</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Timetable;

