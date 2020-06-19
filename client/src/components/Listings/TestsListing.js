import React from 'react';

const TestsListing = ({testsState}) => {

    return(
            <table>
            <thead>
                <tr>
                    <th>Date of test</th>
                    <th>NH3</th>
                    <th>NH4</th>
                    <th>NO3</th>
                    <th>PH</th>
                    <th>temperature (celc)</th>
                </tr>
            </thead>
            <tbody>
                {testsState.map(test => <tr key={test._id}>
                    <td>
                        {test.dateOfTest}
                    </td>
                    <td>
                        {test.nh3}
                    </td>
                    <td>
                        {test.nh4}
                    </td>
                    <td>
                        {test.no3}
                    </td>
                    <td>
                        {test.ph}
                    </td>
                    <td>
                        {test.tempCelc}
                    </td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default TestsListing