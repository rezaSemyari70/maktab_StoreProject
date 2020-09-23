import React from 'react'
import {Row, Col} from 'reactstrap';
import {InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';
import iconInstagram from '../../assets/images/icon-Instagram.svg';
import iconTelegram from '../../assets/images/icon-Telegram.svg';
import iconYoutube from '../../assets/images/icon-Youtube.svg';
import iconAparat from '../../assets/images/icon-Aparat.svg';
import iconPoshtibani from '../../assets/images/icon-poshtibani.svg';
import iconCard from '../../assets/images/icon-Card.svg';
import iconMarjuee from '../../assets/images/icon-marjuee.svg';
import iconGuarantee from '../../assets/images/icon-Guarantee.svg';

import './Footer.scss';

function DefaulFooter() {
    return (
        <Row className="mt-4  footerContent">
            <Col className='backgroundFooter'>
                <Row className="border-bottom topFooter">
                    <Col xs="3" className="border-left itemTopFooter">
                        <img className="iconTopFooter" src={iconPoshtibani} alt=""/>
                    </Col>
                    <Col xs="3" className="border-left itemTopFooter">
                        <img className="iconTopFooter" src={iconMarjuee} alt=""/>
                    </Col>
                    <Col xs="3" className="border-left itemTopFooter">
                        <img className="iconTopFooter" src={iconCard} alt=""/>
                    </Col>
                    <Col xs="3" className="itemTopFooter">
                        <img className="iconTopFooter" src={iconGuarantee} alt=""/>
                    </Col>
                </Row>
                <Row className="d-block d-md-flex my-3 contentFooter">
                    <Col className="d-none d-md-flex ">
                        <Col>
                            <ul className="list-group">
                                <li className="list-group-item headerListItem">
                                    راهنمای خرید
                                </li>
                                <li className="list-group-item list-group-item-secondary">
                                    نحوه ثبت سفارش
                                </li>
                                <li className="list-group-item list-group-item-secondary">
                                    رویه ارسال سفارش
                                </li>
                                <li className="list-group-item list-group-item-secondary">
                                    شیوه پرداخت
                                </li>
                            </ul>
                        </Col>
                        <Col>
                        <ul className="list-group">
                                <li className="list-group-item headerListItem">
                                    خدمات مشتریان
                                </li>
                                <li className="list-group-item list-group-item-secondary">
                                    پرسش‌های متداول
                                </li>
                                <li className="list-group-item list-group-item-secondary">
                                    رویه بازگرداندن کالا
                                </li>
                                <li className="list-group-item list-group-item-secondary">
                                    شرایط استفاده
                                </li>
                            </ul>
                        </Col>
                        {/* <Col></Col> */}
                    </Col>
                    <Col md={5} className="ml-3 ">
                        <Row className="d-flex justify-content-center mx-auto">
                            <Col>
                                <Row className="justify-content-center">
                                    <p className="flex-nowrap">از تخفیف‌ها و جدیدترین‌ها محصولات باخبر شوید</p>
                                </Row>
                                <Row className="justify-content-center">
                                    <InputGroup className="inputSendEmail">
                                        <Input
                                            className="inputSendEmail"
                                            style={{
                                            direction: 'ltr'
                                        }}
                                            placeholder="email"/>
                                        <InputGroupAddon addonType="append">
                                            <Button className="sendEmailBtn" color="success">ارسال</Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Row>
                                <Row className="my-3" xs='12'>
                                    <Col className="p-0">
                                        <img className="socialIconsFooter" src={iconInstagram} alt=""/>
                                    </Col>
                                    <Col className="p-0">
                                        <img className="socialIconsFooter" src={iconTelegram} alt=""/>
                                    </Col>
                                    <Col className="p-0">
                                        <img className="socialIconsFooter" src={iconYoutube} alt=""/>
                                    </Col>
                                    <Col className="p-0">
                                        <img className="socialIconsFooter" src={iconAparat} alt=""/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center abouteStore">
                    <Col>
                        <p className="text-right px-4">درباره فروشگاه :</p>
                        <p className="text-justify px-4">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، .</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">designed by Reza Semyari</Row>
            </Col>
        </Row>
    )
}

export default DefaulFooter;
