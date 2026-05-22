# TO-DO: testear el script desde otra red

import requests
from datetime import date

def get_new_words():
    last_session_date = "2026-05-20"  # Update this date to the last time you updated the answers list
    url = f"https://wordlehints.co.uk/wp-json/wordlehint/v1/answers?from={last_session_date}&to={date.today().strftime('%Y-%m-%d')}&per_page=100"

    print("Attempting to fetch new words from: ", url)
    
    try:
        response = requests.get(url)
        if response.status_code == 200:
            print("Successfully fetched new words.")
            data = response.json()
            newWords = [answer["answer"] for answer in data["results"]]
            return newWords
        else:
            print("Error: ", response.status_code)
            return []
    except requests.RequestException as e:
        print("Error: ", e)
        return []

new_words = get_new_words()
print(new_words)



"""
    private static void updatePastAnswers() throws IOException, InterruptedException {

        // 19/02 es la última vez que actualicé
        String lastSessionDate = getLastTimeUpdated();

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://wordlehints.co.uk/wp-json/wordlehint/v1/answers?from=" + lastSessionDate + "&to=" + LocalDate.now() + "&per_page=100"))
                .GET()
                .build();

        // 3. Send and receive the response
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // 4. Handle results
        if (response.statusCode() == 200) {
            //System.out.println("Response Body: " + response.body());
            List<String> newWords = parseResponse(response.body());
            try{
                for(String answer : newWords){
                    Files.write(Paths.get(PAST_ANSWERS_FILE), (answer + " ").getBytes(), StandardOpenOption.APPEND);
                }
            }catch(IOException e){
                throw new RuntimeException(e);
            }

        } else {
            System.out.println("Error: " + response.statusCode());
        }

    }

    private static List<String> parseResponse(String body) {

        List<String> words = new ArrayList<>();
        JSONObject respuestasJSON = new JSONObject(body);
        JSONArray answers =  respuestasJSON.getJSONArray("results");
        for (int i = 0; i < answers.length(); i++) {
            JSONObject answer = answers.getJSONObject(i);
            words.add(answer.getString("answer"));
        }
        return words;
    }
"""