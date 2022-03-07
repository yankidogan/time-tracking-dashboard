import data from '../data/data.js';

const converter = () => {
    const convertedData = data.map(d => {
        return {
            id: {"S": d.id},
            user_name: {"S": d.name},
            pp_url: {"S": d.pp_url},
            report_data: {
                "L":  d.report_data.map(r => {
                        return {
                            "M": {
                                title: {"S": r.title},
                                timeframes: {
                                    "M": {
                                        daily: {
                                            "M": {
                                                current: {"N": r.timeframes.daily.current.toString()},
                                                previous: {"N": r.timeframes.daily.previous.toString()}
                                            }
                                        },
                                        weekly: {
                                            "M": {
                                                current: {"N": r.timeframes.weekly.current.toString()},
                                                previous: {"N": r.timeframes.weekly.previous.toString()}
                                            }
                                        },
                                        monthly: {
                                            "M": {
                                                current: {"N": r.timeframes.monthly.current.toString()},
                                                previous: {"N": r.timeframes.monthly.previous.toString()}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    })
            }
        }
    });
    console.log(JSON.stringify(convertedData));
}

converter();
