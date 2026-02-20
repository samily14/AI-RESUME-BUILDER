const downloadPDF = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/resume/pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        skills,
        experience
      })
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Backend response:", text);
      throw new Error("API failed");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    a.click();
  } catch (error) {
    console.error("FRONTEND ERROR:", error);
    alert("Backend not responding. Please start server.");
  }
};