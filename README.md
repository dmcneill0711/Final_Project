# What's Stroking Your Brain?

Every 40 seconds, someone in the United States suffers from a stroke. 
<br>
In fact, if you've already had a stroke, you are 25% more likely to have another one. 
<br>
While numerous studies have been done on trying to figure out what triggers strokes in various individuals, 
<br>
But what if there was a way to predict the probabilty of a stroke before it even occurs?
<br>
Using the brain stroke prediction data set from kaggle (https://www.kaggle.com/datasets/zzettrkalpakbal/full-filled-brain-stroke-dataset?select=full_data.csv), we wanted to see if we can use supervised machine learning to see what categories play more into  values
<br>
<hr>

<b><u>Tools/Programs Used:</u></b>
<li>Jupyter Notebook</li>
<li>Tableau</li>
<li>Visual Studio Code</li>
<br>
<hr>
<b><u>Libraries Used:</u></b>
<li>Bootstrap</li>
<li>D3.js</li>
<li>PANDAS</li>
<li>Matplotlib</li>
<li>Sklearn</li>
<li></li>
<br>
<hr>
<b><u>Languages Used:</u></b>
<li>Python</li>
<li>HTML</li>
<li>Javascript</li>
<li></li>
<br>
<hr>
<u><b>Cleaning Up The Data Set:</b></u>
<p>Using Jupyter Notebook, and importing PANDAS, we cleaned up our data. Dropping any null values found, binning the ages of the participants into either "Below 40" or "40+", and the glucose levels and BMIs accordingly (based on their offical medical groupings and/or classifications), our E.T.L. was complete. </p>
<br>
<p>Time for the machine learning!</p>
<br>
<hr>
<u><b>Applying The Machine Learning:</b></u>
<p>With the cleaned up data set in hand, we applied sklean and imported all the dependencies needed to run our analysis. Setting the y variable to the ["stroke"] column while assigning the rest of the dataset to the X, we split the data into X_train, X_test, y_train, and y_test. Then we used the standard scaler to transform our data into z-scores as to not skew our results. Once scaled, we applied the Random Forest Regressor. In order to fine tune our model, we searched for the best hyperparameters using the RandomizedSearchCV and applied those. Then we used the .best_params_ and applied those specifications. </p>
<br>
<hr>
<u><b>Creating The fUZZbEED Quiz:</b></u>
<p>
