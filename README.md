# What's Stroking Your Brain?
<p>Every 40 seconds, someone in the United States suffers from a stroke. </p>
<br>
<p>In fact, if you've already had a stroke, you are 25% more likely to have another one. </p> 
<br>
<p>While numerous studies have been done on trying to figure out what triggers strokes in various individuals, it is still difficult to pinpoint exactly what triggers affect whom and by how much.</p>
<br>
<p>But that doesn't stop us from trying to find out!</p>
<br>
<p>Using the brain stroke prediction data set from <a href="https://www.kaggle.com/datasets/zzettrkalpakbal/full-filled-brain-stroke-dataset?select=full_data.csv">kaggle</a>, we wanted to see if we can use supervised machine learning to see what categories/variables play a role in predicting the probability of someone having a stroke. </p>
<hr>
<h2><b><u>Tools/Programs Used:</u></b></h2>
<li>Jupyter Notebook</li>
<li>Tableau</li>
<li>Visual Studio Code</li>
<hr>
<h2><b><u>Libraries Used:</u></b></h2>
<li>Bootstrap</li>
<li>D3.js</li>
<li>PANDAS</li>
<li>Matplotlib</li>
<li>Sklearn</li>
<hr>
<h2><b><u>Languages Used:</u></b></h2>
<li>Python</li>
<li>HTML</li>
<li>Javascript</li>
<li>CSS</li>
<hr>
<h2><u><b>Cleaning Up The Data Set:</b></u></h2>
<p>Using Jupyter Notebook, and importing PANDAS, we cleaned up our data. Dropping any null values found, dropping the children (anyone under the age 18), and binning the ages of the participants into either "Below 40" or "40+", and the glucose levels and BMIs accordingly (based on their official medical groupings and/or classifications), our E.T.L. was complete. </p>
<hr>
<h2><u><b>Applying The Machine Learning:</b></u></h2>
<p>With the data set in hand, we applied sklearn and imported all the dependencies needed to run our analysis. We dropped the patients that were classified as "children" and only worked with patients who were 18 and up. Then, we applied the pd.get_dummies onto our data and changed all of the object/string data types to int since the machine learning wouldn't work on previous data types. Now, we can set the y variable to the ["stroke"] column while assigning the rest of the dataset to the X, where we split the data into X_train, X_test, y_train, and y_test, and using the standard scaler to transform our data into z-scores as to not skew our results. Once scaled, we applied the Random Forest Classifier. In order to attempt to fine tune our model, we searched for the best hyper-parameters using the RandomizedSearchCV and applied those. Then we used the .best_params_ and applied those specifications, giving us our final model. </p>
<hr>
<h2><u><b>Creating The fUZZbEED Page:</b></u></h2>

![fuzzed](https://user-images.githubusercontent.com/100710958/187311348-5f3f3510-6556-41cd-8050-bb0055325442.png)

<p> Using a template from the website <a href="https://themewagon.com/themes/johndoe-free-one-page-portfolio-website-template/">themewagon.com</a> and editing the code for the quiz from <a href="https://github.com/GauriKhandke/Gauri-code-quiz">Gauri Khandke</a>, we developed the front page of fUZZbEED to be not only educational, but also relatable. The quiz is now a 3 question quiz with 3 possible responses per question, no time limit, and instead of only adding 1 point for the correct question, it adds a different number of points correlating to the risk assessment value of each response (with a maximum number of 9 points available). Following the quiz is not only an analysis of our model, but also a few interactive Tableau charts that also correlate with our findings. We wanted to keep everything casual, emulating those older websites that became popular with their endless quizzes and listicles, while providing information to those in search of it.
</p>
<p> Click Here To Visit The Site: <a href="https://dmcneill0711.github.io/What-s_Stroking_Your_Brain/">fUZZbEED</a><p/>
<br>
<hr>
<h2><u><b>Contributors:</b></u></h2>
<h3>Tanisha Cooper</h3>
<p>GitHub: https://github.com/TanishaCooper </p>
<p>LinkedIn: https://www.linkedin.com/in/tanisha-cooper-5b3743197/ </p>
<hr>
<h3>Diandra McNeill</h3>
<p>GitHub: https://github.com/dmcneill0711 </p>
<p>LinkedIn: https://www.linkedin.com/in/diandra-mcneill-765410233/ </p>
<hr>
<h3>Anna Pettigrew</h3>
<p>GitHub: https://github.com/annapettigrew </p>
<p>LinkedIn: https://www.linkedin.com/in/anna-pettigrew/ </p>
<hr>
