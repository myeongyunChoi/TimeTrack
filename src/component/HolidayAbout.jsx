import '../css/about.scss';
import '../backend/about.asp'
import React, { useState, useEffect } from 'react';

const HolidayAbout = () => {

    const testDB = [
        {
            name: "홍길동",
            staff_num: 20230306001,
            start_vacation_period: "2022-05-23",
            end_vacation_period: "2022-05-27",
            annual: "1년차",
            joining_date: "2021-05-01",
            have_annual: 15,
            used_annual: 3,
            rest_annual: 12,
            state: "승인완료",
            newcomer: true
        },
        {
            name: "김철수",
            staff_num: 20220101001,
            start_vacation_period: "2022-06-10",
            end_vacation_period: "2022-06-17",
            annual: "3년차",
            joining_date: "2019-06-01",
            have_annual: 20,
            used_annual: 7,
            rest_annual: 13,
            state: "승인대기",
            newcomer: false
        },
        {
            name: "이영희",
            staff_num: 20200501001,
            start_vacation_period: "2022-07-15",
            end_vacation_period: "2022-07-20",
            annual: "5년차",
            joining_date: "2017-01-01",
            have_annual: 25,
            used_annual: 10,
            rest_annual: 15,
            state: "반려",
            newcomer: false
        },
        {
            name: "박민수",
            staff_num: 20210801001,
            start_vacation_period: "2022-08-09",
            end_vacation_period: "2022-08-13",
            annual: "1년차",
            joining_date: "2021-08-01",
            have_annual: 15,
            used_annual: 2,
            rest_annual: 13,
            state: "승인완료",
            newcomer: true
        },
        {
            name: "최성호",
            staff_num: 20200502002,
            start_vacation_period: "2022-09-01",
            end_vacation_period: "2022-09-03",
            annual: "3년차",
            joining_date: "2019-01-01",
            have_annual: 20,
            used_annual: 10,
            rest_annual: 10,
            state: "반려",
            newcomer: false
        },
        {
            name: "홍길동",
            staff_num: 20230306001,
            start_vacation_period: "2022-05-23",
            end_vacation_period: "2022-05-27",
            annual: "1년차",
            joining_date: "2021-05-01",
            have_annual: 15,
            used_annual: 3,
            rest_annual: 12,
            state: "승인완료",
            newcomer: true
        },
        {
            name: "김철수",
            staff_num: 20220101001,
            start_vacation_period: "2022-06-10",
            end_vacation_period: "2022-06-17",
            annual: "3년차",
            joining_date: "2019-06-01",
            have_annual: 20,
            used_annual: 7,
            rest_annual: 13,
            state: "승인대기",
            newcomer: false
        },
        {
            name: "이영희",
            staff_num: 20200501001,
            start_vacation_period: "2022-07-15",
            end_vacation_period: "2022-07-20",
            annual: "5년차",
            joining_date: "2017-01-01",
            have_annual: 25,
            used_annual: 10,
            rest_annual: 15,
            state: "반려",
            newcomer: false
        },
        {
            name: "박민수",
            staff_num: 20210801001,
            start_vacation_period: "2022-08-09",
            end_vacation_period: "2022-08-13",
            annual: "1년차",
            joining_date: "2021-08-01",
            have_annual: 15,
            used_annual: 2,
            rest_annual: 13,
            state: "승인완료",
            newcomer: true
        },
        {
            name: "최성호",
            staff_num: 20200502002,
            start_vacation_period: "2022-09-01",
            end_vacation_period: "2022-09-03",
            annual: "3년차",
            joining_date: "2019-01-01",
            have_annual: 20,
            used_annual: 10,
            rest_annual: 10,
            state: "반려",
            newcomer: false
        }, {
            name: "홍길동",
            staff_num: 20230306001,
            start_vacation_period: "2022-05-23",
            end_vacation_period: "2022-05-27",
            annual: "1년차",
            joining_date: "2021-05-01",
            have_annual: 15,
            used_annual: 3,
            rest_annual: 12,
            state: "승인완료",
            newcomer: true
        },
        {
            name: "김철수",
            staff_num: 20220101001,
            start_vacation_period: "2022-06-10",
            end_vacation_period: "2022-06-17",
            annual: "3년차",
            joining_date: "2019-06-01",
            have_annual: 20,
            used_annual: 7,
            rest_annual: 13,
            state: "승인대기",
            newcomer: false
        },
        {
            name: "이영희",
            staff_num: 20200501001,
            start_vacation_period: "2022-07-15",
            end_vacation_period: "2022-07-20",
            annual: "5년차",
            joining_date: "2017-01-01",
            have_annual: 25,
            used_annual: 10,
            rest_annual: 15,
            state: "반려",
            newcomer: false
        },
        {
            name: "박민수",
            staff_num: 20210801001,
            start_vacation_period: "2022-08-09",
            end_vacation_period: "2022-08-13",
            annual: "1년차",
            joining_date: "2021-08-01",
            have_annual: 15,
            used_annual: 2,
            rest_annual: 13,
            state: "승인완료",
            newcomer: true
        },
        {
            name: "최성호",
            staff_num: 20200502002,
            start_vacation_period: "2022-09-01",
            end_vacation_period: "2022-09-03",
            annual: "3년차",
            joining_date: "2019-01-01",
            have_annual: 20,
            used_annual: 10,
            rest_annual: 10,
            state: "반려",
            newcomer: false
        }
    ];

    const [annualData, setAnnualData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/about.asp')
            .then(response => response.text())
            .then(data => {
                console.log(data);
            });
    }, []);

    return (
        <div className="holiday_about">
            <div className="about_list_wrap">
                <table className="about_list">
                    <thead>
                        <tr>
                            <td>사원명</td>
                            <td>사원번호</td>
                            <td>사용일자</td>
                            <td>연차</td>
                            <td>입사일</td>
                            <td>총 보유 연차</td>
                            <td>사용 연차</td>
                            <td>잔여 연차</td>
                            <td>더보기</td>
                            <td>상태</td>
                            <td>1년 미만</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            testDB.map((data, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{data.name}</td>
                                        <td>{data.staff_num}</td>
                                        <td>{data.start_vacation_period} ~ {data.end_vacation_period}</td>
                                        <td>{data.annual}</td>
                                        <td>{data.joining_date}</td>
                                        <td>{data.have_annual}</td>
                                        <td>{data.used_annual}</td>
                                        <td>{data.rest_annual}</td>
                                        <td>more</td>
                                        <td>{data.state}</td>
                                        <td>{data.newcomer ? "Y" : "N"}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
}


export default HolidayAbout;
