async function launchFile(fileName, gameName) {
            // 1. SET YOUR FILENAME HERE
            const gameFileName = fileName; 

            try {
                // Fetch the content of your local HTML file
                const response = await fetch(gameFileName);
                const htmlContent = await response.text();

                // 2. Open the about:blank window
                const win = window.open('about:blank', '_blank');

                if (!win) {
                    alert("Pop-up blocked! Please allow pop-ups for this page.");
                    return;
                }

                // 3. Write the content into the new blank window
                win.document.open();
                win.document.write(htmlContent);
                win.document.close();

                // 4. Force the title to stay clean (optional)
                win.document.title = gameName;

            } catch (err) {
                console.error(err);
                alert("Error: Could not find " + gameFileName + ". Ensure it is in the same folder as this launcher.");
            }
        }