<!-- 
   Name:    Dustin Memmott
   Class:   CS2550 - Fall 2020
   Date:    12/06/20
   Project: Final P2
-->

<!DOCTYPE html>
<html lang="en">
   <meta charset="UTF-8">
   <title>Dustin's Website</title>
   <link rel="stylesheet" href="css/styles.css"> 

   <!-- Home Page -->
   <body class="grid-container">
      <header class="Header">
         <img src="pictures/ChiefsLogo.png"/>
         <p>Kansas City Chiefs Fan</p>
      </header>
      
      <aside class="Aside">
         <nav>
            <button onclick='toggle("buttonHome")'>Home</button>
            <button onclick="toggle('buttonPlayers')">Players</button>
            <button onclick='toggle("buttonStandings")'>Standings</button>
            <button onclick='toggle("buttonLog")'>Log Visit</button>
         </nav>
         <div class="game_score"><p>KS vs HOU</p><p>34 - 20</p></div>
         <div class="game_score"><p>KS vs LAC</p><p>23 - 20</p></div>
         <div class="game_score"><p>KS vs BAL</p><p>34 - 20</p></div>
         <div class="game_score"><p>KS vs NE</p><p>26 - 10</p></div>
         <div class="game_score"><p>KS vs LAV</p><p>32 - 40</p></div>
         <div class="game_score"><p>KS vs BUF</p><p>26 - 17</p></div>
         <div class="game_score"><p>KS vs DEN</p><p>43 - 16</p></div>
         <div class="game_score"><p>KS vs NYJ</p><p>35 - 9</p></div>
      </aside>

      <main class="Main">
         <section id="Main"> <!-- HOME -->
            <div class="section_title">
               <p>Home Page</p>
            </div> 
            <div class="article">
               <a class="article_title" href="https://www.arrowheadpride.com/2020/12/6/22155628/five-things-to-watch-as-the-chiefs-host-the-broncos-nfl-week-13" target="_blank">
                  Five things to watch as the Chiefs host the Broncos
               </a>
               <img src="pictures/BroncosChiefs.jpg"/>
               <p>
                  As chaotic and abnormal as the NFL season has been, all 32 teams have stayed well-enough intact to play their entire schedule
                   — and one of them will be winning a Lombardi Trophy. At this point of the campaign, the Kansas City Chiefs look to be as able 
                   as any other team — if not more so — to pull it off...
               </p>
            </div>
            <div class="article">
               <a class="article_title" href="https://www.si.com/nfl/chiefs/podcasts/patrick-mahomes-biggest-competition-for-mvp" target="_blank">
                  Who is Mahomes' Biggest Competition for MVP?
               </a>
               <p>
                  As the midway point of the season has come and gone, the conversation for NFL's Most Valuable Player is heating up. With Kansas 
                  City Chiefs quarterback Patrick Mahomes in the conversation for the award, let's take a look at other players that could be in 
                  contention for the MVP... Arrowhead Report's Mark Van Sickle joined me on today's Roughing the Kicker to break down the MVP race.
               </p>
               <img src="pictures/Mahomes.jpg"/>
               <p> 
                  this season and assess Mahomes' chances of bringing home the second regular-season MVP award of his career. With 2,687 yards, 
                  25 touchdowns and one interception through nine games, Mahomes hasn't missed a step since his first season as the starter in 2018... 
               </p>
            </div>
            <div class="article">
               <a class="article_title" href="https://www.youtube.com/embed/pO6jFrgWh18" target="_blank">
                  Patrick Mahomes Highlights
               </a>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/pO6jFrgWh18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
         </section>

         <section id="Players"> <!-- PLAYERS -->
            <div class="section_title">
               <p>Players</p>
            </div> 

            <div class="player_spotlight">
               <div class="player_pic">
                  <img src="pictures/MahomesPlayerPick.png" alt="Player Picture"/>
               </div>
               <div class="player_bio">
                  <p><b>Name: </b> Patrick Mahomes</p>
                  <p><b>Number: </b> 15</p>
                  <p><b>Position: </b> QB</p>
                  <p><b>Age: </b> 25</p>
                  <p><b>Height: </b> 6'3"</p>
                  <p><b>Weight: </b> 230lbs</p>
                  <p><b>Hometown: </b> Tyler, TX</p>
               </div>
               <div class="player_stats">
                  <p><b>Touchdowns:</b> 30</p>
                  <p><b>Interceptions:</b> 2</p>
                  <p><b>Passing Yards:</b> 3,497</p>
                  <p><b>Rushing Yards:</b> 215</p>
               </div>
            </div>

            <div class="player_spotlight">
               <div class="player_pic">
                  <img src="pictures/TyreekHill.png" alt="Player Picture"/>
               </div>
               <div class="player_bio">
                  <p><b>Name: </b>Tyreek Hill</p>
                  <p><b>Number: </b> 10</p>
                  <p><b>Position: </b> WR</p>
                  <p><b>Age: </b> 26</p>
                  <p><b>Height: </b> 5'10"</p>
                  <p><b>Weight: </b> 185lbs</p>
                  <p><b>Hometown: </b> Lauderhill, FL</p>
               </div>
               <div class="player_stats">
                  <p><b>Touchdowns:</b> 13</p>
                  <p><b>Targeted:</b> 101</p>                  
                  <p><b>Receptions:</b> 68</p>
                  <p><b>Receiving Yards:</b> 1,021</p>
               </div>
            </div>

            <div class="player_spotlight">
               <div class="player_pic">
                  <img src="pictures/TravisKelce.png" alt="Player Picture"/>
               </div>
               <div class="player_bio">
                  <p><b>Name: </b>Travis Kelce</p>
                  <p><b>Number: </b> 87</p>
                  <p><b>Position: </b> TE</p>
                  <p><b>Age: </b> 31</p>
                  <p><b>Height: </b> 6'5"</p>
                  <p><b>Weight: </b> 260lbs</p>
                  <p><b>Hometown: </b> Westlake, OH</p>
               </div>
               <div class="player_stats">
                  <p><b>Touchdowns:</b> 13</p>
                  <p><b>Targeted:</b> 101</p>                  
                  <p><b>Receptions:</b> 68</p>
                  <p><b>Receiving Yards:</b> 1,021</p>
               </div>
            </div>

         </section>   
         <section id="Standings"> <!-- STANDINGS -->
            <div class="section_title">
               <p>Standings</p>
            </div> 
            <div class="AFC_standings">
               <p>AFC WEST Standings</p>
               <table>
                  <thead>
                    <tr>
                      <th>Team</th>
                      <th>Wins</th>
                      <th>Loses</th>
                      <th>Ties</th>
                      <th>Percentage</th>
                      <th>Home</th>
                      <th>Away</th>
                      <th>Streak</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Chiefs</td>
                      <td>10</td>
                      <td>1</td>
                      <td>0</td>
                      <td>.909</td>
                      <td>4-1</td>
                      <td>6-0</td>
                      <td>W6</td>
                    </tr>
                    <tr>
                      <td>Raiders</td>
                      <td>7</td>
                      <td>5</td>
                      <td>0</td>
                      <td>.583</td>
                      <td>2-3</td>
                      <td>5-2</td>
                      <td>W1</td>
                    </tr>
                    <tr>
                      <td>Broncos</td>
                      <td>4</td>
                      <td>7</td>
                      <td>0</td>
                      <td>.364</td>
                      <td>2-4</td>
                      <td>2-3</td>
                      <td>L1</td>
                    </tr>
                    <tr>
                      <td>Chargers</td>
                      <td>3</td>
                      <td>9</td>
                      <td>0</td>
                      <td>.250</td>
                      <td>2-4</td>
                      <td>1-5</td>
                      <td>L2</td>
                    </tr>
                  </tbody>
               </table>
            </div>

            <div class="AFC_standings">
               <p>AFC Standings</p>
               <table>
                  <thead>
                    <tr>
                      <th>Team</th>
                      <th>Wins</th>
                      <th>Loses</th>
                      <th>Ties</th>
                      <th>Percentage</th>
                      <th>Home</th>
                      <th>Away</th>
                      <th>Streak</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Steelers</td>
                      <td>11</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1.0</td>
                      <td>6-0</td>
                      <td>5-0</td>
                      <td>W11</td>
                    </tr>
                    <tr>
                     <td>Chiefs</td>
                     <td>10</td>
                     <td>1</td>
                     <td>0</td>
                     <td>.909</td>
                     <td>4-1</td>
                     <td>6-0</td>
                     <td>W6</td>
                   </tr>
                    <tr>
                      <td>Bills</td>
                      <td>8</td>
                      <td>3</td>
                      <td>0</td>
                      <td>.727</td>
                      <td>5-1</td>
                      <td>3-2</td>
                      <td>W1</td>
                    </tr>
                    <tr>
                      <td>Titans</td>
                      <td>8</td>
                      <td>4</td>
                      <td>0</td>
                      <td>.667</td>
                      <td>4-3</td>
                      <td>4-1</td>
                      <td>L1</td>
                    </tr>
                    <tr>
                     <td>Browns</td>
                     <td>9</td>
                     <td>3</td>
                     <td>0</td>
                     <td>.750</td>
                     <td>5-1</td>
                     <td>4-2</td>
                     <td>W4</td>
                   </tr>
                  </tbody>
               </table>
            </div>
         </section>

         <section id="Log">
            <div class="section_title">
               <p>Visitor Form</p>
            </div>
            <div class="successMsg" id="successMsg" style="display:none">
               <p>Thank you for logging your visit!</p>
             </div>
             <form id="myform">
               <div class="formRow">
                  <div class="inline-flex">
                     <label for="first-name">First Name</label>
                     <input type="text" id="first-name" name="first-name" placeholder="Enter your first name here" required>
                     <div class="errorMsg">First Name is Required</div>
                  </div>
                  <div class="inline-flex">
                     <label for="last-name">Last Name</label>
                     <input type="text" id="last-name" name="last-name" placeholder="Enter your last name here" required>
                     <div class="errorMsg">Last Name is Required</div> 
                  </div>
               </div>

               <div class="formRow">
                  <div class="inline-flex">
                     <label for="address">Address</label>
                     <input type="text"  id="address" name="address" placeholder="Enter your address here" required>
                     <div class="errorMsg"></div>
                  </div>
                  <div class="inline-flex">
                     <label for="city">City</label>
                     <input type="text"  id="city" name="city" placeholder="Enter your city here" required>
                     <div class="errorMsg"></div>
                  </div>
               </div>

               <div class="formRow">
                  <div class="inline-flex">
                     <label for="state">State</label>
                     <input type="text"  id="state"  name="state" placeholder="Enter your state here" required>
                     <div class="errorMsg">Please enter a two character state code</div>
                  </div>
                  <div class="inline-flex">
                     <label for="zip">Zip</label>
                     <input id="zip" name="zip" type="text" placeholder="Enter a zip code here" maxlength="5" minlength="5" pattern="^\d{5}$" required>
                     <div class="errorMsg">You must enter a valid Zip Code</div>
                  </div>
               </div>

               <div class="formRow">
                  <div class="inline-flex">
                     <label for="email">Email</label>
                     <input type="email" id="email" name="email" placeholder="Enter your email here" required>
                     <div class="errorMsg">You must enter a valid email</div>
                  </div>
                  <div class="inline-flex">
                     <label for="phone">Phone</label>
                     <input type="phone" id="phone" placeholder="Enter your phone here" minlength= "10" maxlength="12" pattern="([0-9]{3}-[0-9]{3}-[0-9]{4})|([0-9]{10})" required>
                     <div class="errorMsg">You must enter a valid phone number</div>
                  </div>
               </div>
               
               <div class="formRow">
                  <h3>How did you find my page?</h3>
               </div>

               <div class="formRow">
                  <ul class="inline-flex">
                     <li>
                        <input type="checkbox" id='google' name='find-page' value="google">
                        <label for="google">Google Search</label>
                     </li>
                     <li>
                        <input type="checkbox" id='friend' name='find-page' value="friend">
                        <label for="friend">Friend</label>
                     </li>
                     <li>
                        <input type="checkbox" id='newspaper' name='find-page' value="newspaper">
                        <label for="newspaper">News Paper</label>
                        <div class="errorMsg">You must check at least one</div>
                     </li>
                  </ul>
               </div>

               <div class="formRow">
                  <label for="comment">Comments</label>
                  <textarea rows="4" id="comment" placeholder="Enter your comments here"></textarea>
               </div>

               <div class="formRow">
                  <button id="formSubmit" type="submit">Submit</button>
               </div>
            </form>
         </section>
      </main>

      <footer class="Footer">
         <p>This is a fan site and not to be taken seriously.</p>
      </footer>

   <script src="js/toggle.js"></script> 
   <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
   <script src="js/validation.js"></script>
   <script>
      $(document).ready(function () {
         initValidation("#myform");
      });
   </script>

   </body>
</html>

