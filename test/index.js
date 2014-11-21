"use strict";

var phoneNumber = require("../lib/index.js"),
    expect = require('chai').expect;

describe('phoneNumber', function(){

    describe('normalizePhoneNumber', function(){

        it('should return 89135292926 for 8-913-529-2926', function(done){
            var result = phoneNumber.normalize('8-913-529-2926');
            expect(result).to.equal('89135292926');
            done();
        });

        it('should return 89135292926 for 913-529-2926', function(done){
            var result = phoneNumber.normalize('913-529-2926');
            console.log('normal', result);
            expect(result).to.equal('89135292926');
            done();
        });

        it('should return 89135292926 for 913 529-2926', function(done){
            var result = phoneNumber.normalize('913 529-2926');
            console.log('normal', result);
            expect(result).to.equal('89135292926');
            done();
        });

        it('should return 89135292926 for (913) 529-2926', function(done){
            var result = phoneNumber.normalize('(913) 529-2926');
            console.log('normal', result);
            expect(result).to.equal('89135292926');
            done();
        });

        it('should return 89135292926 for (913)-529-2926', function(done){
            var result = phoneNumber.normalize('(913)-529-2926');
            console.log('normal', result);
            expect(result).to.equal('89135292926');
            done();
        });

        it('should return 89135292926 for (913)-529 29  26', function(done){
            var result = phoneNumber.normalize('(913)-529 29  26');
            console.log('normal', result);
            expect(result).to.equal('89135292926');
            done();
        });

        it('should return 89135292926 for 913 529 29  26', function(done){
            var result = phoneNumber.normalize('913 529 29  26');
            console.log('normal', result);
            expect(result).to.equal('89135292926');
            done();
        });

    });

    

});