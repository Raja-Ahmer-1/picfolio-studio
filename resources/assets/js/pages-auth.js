/**
 *  Pages Authentication
 */

'use strict';
const formAuthentication = document.querySelector('#formAuthentication');

document.addEventListener('DOMContentLoaded', function (e) {
    (function () {
        // Form validation for Add new record
        if (formAuthentication) {
            const fv = FormValidation.formValidation(formAuthentication, {
                fields: {
                    name: {
                        validators: {
                            notEmpty: {
                                message: 'Please enter name'
                            },
                            stringLength: {
                                min: 6,
                                message: 'Name must be more than 6 characters'
                            }
                        }
                    },
                    email: {
                        validators: {
                            notEmpty: {
                                message: 'Please enter your email'
                            },
                            emailAddress: {
                                message: 'Please enter valid email address'
                            }
                        }
                    },
                    'email-username': {
                        validators: {
                            notEmpty: {
                                message: 'Please enter email / username'
                            },
                            stringLength: {
                                min: 6,
                                message: 'Username must be more than 6 characters'
                            }
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'Please enter your password'
                            },
                            stringLength: {
                                min: 8,
                                message: 'Password must be more than 8 characters'
                            }
                        }
                    },
                    'confirm-password': {
                        validators: {
                            notEmpty: {
                                message: 'Please confirm password'
                            },
                            identical: {
                                compare: function () {
                                    return formAuthentication.querySelector('[name="password"]').value;
                                },
                                message: 'The password and its confirm are not the same'
                            },
                            stringLength: {
                                min: 8,
                                message: 'Password must be more than 8 characters'
                            }
                        }
                    },
                    cnic: {
                        validators: {
                            notEmpty: {
                                message: 'Please enter CNIC number'
                            },
                            stringLength: {
                                min: 14,
                                max: 14,
                                message: 'CNIC number must not be more or less than 14 digits'
                            }
                        }
                    },
                    contact: {
                        validators: {
                            notEmpty: {
                                message: 'Please enter contact number'
                            },
                            stringLength: {
                                min: 10,
                                max: 11,
                                message: 'Contact number must be in between 10-11 digits'
                            }
                        }
                    },
                    terms: {
                        validators: {
                            notEmpty: {
                                message: 'Please agree terms & conditions'
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap5: new FormValidation.plugins.Bootstrap5({
                        eleValidClass: '',
                        rowSelector: '.mb-3'
                    }),
                    submitButton: new FormValidation.plugins.SubmitButton(),

                    defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                    autoFocus: new FormValidation.plugins.AutoFocus()
                },
                init: instance => {
                    instance.on('plugins.message.placed', function (e) {
                        if (e.element.parentElement.classList.contains('input-group')) {
                            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
                        }
                    });
                }
            });
        }

        //  Two Steps Verification
        const numeralMask = document.querySelectorAll('.numeral-mask');

        // Verification masking
        if (numeralMask.length) {
            numeralMask.forEach(e => {
                new Cleave(e, {
                    numeral: true
                });
            });
        }
    })();
});