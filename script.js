function predictChurn() {

    let name = document.getElementById("name").value;
    let tenure = parseFloat(document.getElementById("tenure").value);
    let monthly = parseFloat(document.getElementById("monthly").value);
    let total = parseFloat(document.getElementById("total").value);
    let contract = document.getElementById("contract").value;
    let internet = document.getElementById("internet").value;

    if (
        name == "" ||
        isNaN(tenure) ||
        isNaN(monthly) ||
        isNaN(total)
    ) {
        alert("Please fill all the fields.");
        return;
    }

    let result = document.getElementById("result");
    let message = document.getElementById("message");
    let confidence = document.getElementById("confidence");
    let status = document.getElementById("status");

    // Customer Retained
    if (
        tenure >= 24 &&
        monthly <= 80 &&
        contract == "Two Year"
    ) {

        result.innerHTML = "✅ CUSTOMER RETAINED";
        result.className = "approved";

        confidence.innerHTML = "95%";
        status.innerHTML = "Retained";

        message.innerHTML =
            "<b>" + name + "</b>, this customer is likely to continue using the service. The customer has a stable contract and a low probability of churn.";

    }

    // Moderate Risk
    else if (
        tenure >= 12 &&
        monthly <= 100 &&
        contract == "One Year"
    ) {

        result.innerHTML = "⚠ MODERATE CHURN RISK";
        result.className = "";

        confidence.innerHTML = "87%";
        status.innerHTML = "Moderate Risk";

        message.innerHTML =
            "<b>" + name + "</b>, this customer has a moderate risk of churn. Consider providing loyalty offers or personalized services.";

    }

    // Customer Churn
    else {

        result.innerHTML = "❌ CUSTOMER LIKELY TO CHURN";
        result.className = "rejected";

        confidence.innerHTML = "91%";
        status.innerHTML = "High Risk";

        message.innerHTML =
            "<b>" + name + "</b>, this customer is likely to leave the service. Offer discounts, retention plans, or improved customer support.";

    }

}
