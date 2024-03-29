
# create a sequence for the x values
x <- seq(0, 14, by = 1)

# create the discrete y values of the binomial distribution
y <- dbinom(x, 15, 0.5)

# name the file
png(file = "binomial.png")

# Plot the graph for this sample.
plot(x,y, pch=19, xlab="", ylab="Probability")

# save
dev.off()

