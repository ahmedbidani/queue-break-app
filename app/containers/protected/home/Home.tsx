import * as React from "react"
import styles from "./home.module.scss";
import Logo from "../../../assets/images/logo.png";

export interface Clock {
    date: Date;
}

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={Logo}/>
                </div>
                <div className={styles.user}>
                    <img src="https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png"/>
                    <span>Benbelgacem Hichem</span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.userList}>
                    <div className={styles.peopleList} id="people-list">
                        <ul className={styles.list}>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <img src="https://scontent.fdoh2-1.fna.fbcdn.net/v/t1.0-9/87456614_2615756855318872_7107607366580830208_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQli3KHP72KL0qHVrpCmvrHLWawRqsk1tIh4Q3ghWNVrKKXTH8Tw-ixPtkv2e5a12kw&_nc_ht=scontent.fdoh2-1.fna&oh=18788cfe21fdb8ae40822b9833fdb3e0&oe=5E92888F" alt="avatar" />
                                <div className={styles.about}>
                                    <div className={styles.name}>Vincent Porter</div>
                                    <div className={styles.status}>
                                    <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.body}>
                    Body
                </div>
            </div>
        </div>
    )
}

export default Home