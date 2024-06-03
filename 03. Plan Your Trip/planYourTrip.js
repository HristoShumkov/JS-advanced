describe("Test planYourTrip functions", () => {
    describe("Test choosingDestination functionality", () => {
        it("Test with invalid year", () => {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2025)).to.throw("Invalid Year!");
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw("Invalid Year!");
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 1998)).to.throw("Invalid Year!");
        }) 

        it("Test with invalid destination", () => {
            expect(() => planYourTrip.choosingDestination("Spa Resort", "Winter", 2024)).to.throw("This destination is not what you are looking for.");
            expect(() => planYourTrip.choosingDestination("Beach Resort", "Winter", 2024)).to.throw("This destination is not what you are looking for.");
            expect(() => planYourTrip.choosingDestination("Amazonian jungle", "Winter", 2024)).to.throw("This destination is not what you are looking for.");
        })

        it("Test with non-Winter season", () => {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024), "Consider visiting during the Winter for the best experience at the Ski Resort.", "value is correct")
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Autumn", 2024), "Consider visiting during the Winter for the best experience at the Ski Resort.", "value is correct")
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Spring", 2024), "Consider visiting during the Winter for the best experience at the Ski Resort.", "value is correct")
        })

        it("Test with correct values", () => {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024), "Great choice! The Winter is the perfect time to visit the Ski Resort.", "value is correct")
        })
    }) 

    describe("Test exploreOptions functionality", () => {
        it("Test with invalid values", () => {
            expect(() => planYourTrip.exploreOptions("Ski", 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions({activity: "Ski"}, 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions("activity", [])).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions({}, "2")).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions("ski", "2")).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["ski", "snowboard", "relax"], 3)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["ski", "snowboard", "relax"], -3)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["ski", "snowboard", "relax"], "2")).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["ski", "snowboard", "relax"], {})).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions("ski", 3.2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(22, 3.2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["ski", "snowboard", "relax"], 1.13)).to.throw("Invalid Information!");
        })

        it("Test with valid values", () => {
            assert.equal(planYourTrip.exploreOptions(["ski", "snowboard", "relax"], 1), "ski, relax", "value is correct");
            assert.equal(planYourTrip.exploreOptions(["ski", "snowboard", "relax"], 2), "ski, snowboard", "value is correct");
            assert.equal(planYourTrip.exploreOptions(["ski", "snowboard", "relax"], 0), "snowboard, relax", "value is correct");
        })
    })

    describe("Test estimateExpenses functionality", () => {
      it("Test with invalid values", () => {
        expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses(-100, -200)).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses("450", "250")).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses([], "250")).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses([], [])).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses(0, 300)).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses(-100, 400)).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses("200", 300)).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses([], 300)).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses(300, 0)).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses(200, -200)).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses(100, "400")).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses(100, {})).to.throw("Invalid Information!");
        expect(() => planYourTrip.estimateExpenses(100, [])).to.throw("Invalid Information!");
      })

      it("Test with cost up to 500", () => {
        assert.equal(planYourTrip.estimateExpenses(10, 50), "The trip is budget-friendly, estimated cost is $500.00.", "value is correct");
        assert.equal(planYourTrip.estimateExpenses(40, 10), "The trip is budget-friendly, estimated cost is $400.00.", "value is correct");
        assert.equal(planYourTrip.estimateExpenses(10, 10), "The trip is budget-friendly, estimated cost is $100.00.", "value is correct");
      })

      it("Test with cost over 500", () => {
        assert.equal(planYourTrip.estimateExpenses(10, 51), "The estimated cost for the trip is $510.00, plan accordingly.", "value is correct");
        assert.equal(planYourTrip.estimateExpenses(40, 100), "The estimated cost for the trip is $4000.00, plan accordingly.", "value is correct");
        assert.equal(planYourTrip.estimateExpenses(20, 40), "The estimated cost for the trip is $800.00, plan accordingly.", "value is correct");
      })
    })
})
